export interface IError {
  type: string,
  message: string,
  error: any
}

export function findError(errors: IError[], type: string): IError | null {
  if (!errors) {
    return null
  }
  const foundError = errors.find(error => error.type === type)
  return foundError
}
