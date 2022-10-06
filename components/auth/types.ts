export interface LoginForm {
  data: {
    email: string,
    password: string
  },
  errors: object,
  pending: boolean
}
