export interface IRootState {
  User: IUser
  Amounts: IAmounts
}

export interface IUser {
  name: string
  email: string
  placa: string
}

interface type {
  type: string
}

export interface IUserAction extends type {
  payload: IUser
}

export interface ICoverage {
  llanta?: boolean
  choque?: boolean
  atropello?: boolean
}

export interface IAmounts {
  amount: number
  finalPrice: number
  coverage: ICoverage
}

export interface IAmountsAction extends type {
  payload: number | any
}