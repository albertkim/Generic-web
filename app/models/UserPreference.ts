export interface IUserPreference {
  userId: number,
  preference: {
    id: number,
    name: string,
    category: string,
    defaultValue: boolean
  },
  value: boolean
}
