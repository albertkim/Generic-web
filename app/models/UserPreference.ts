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

export interface IUpdateUserPreference {
  preferenceId: number,
  value: boolean
}
