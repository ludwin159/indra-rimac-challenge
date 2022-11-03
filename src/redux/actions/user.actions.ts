import { IUser } from "../types"

export const ADD_USER = 'ADD_USER'
export const RESTART_USER = 'RESTART_USER'

export const addUser = (user: IUser) => ({
  type: ADD_USER,
  payload: user
})

export const restartUser = () => ({ type: RESTART_USER })