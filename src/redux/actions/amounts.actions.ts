import { ICoverage } from "../types"

export const SET_AMOUT = 'SET_AMOUT'
export const SET_FINAL_PRICE = 'SET_FINAL_PRICE'
export const SET_COVERAGE = 'SET_COVERAGE'
export const RESTORE_STATE= 'RESTORE_STATE'

export const setAmount = (amount: number) => ({
  type: SET_AMOUT,
  payload: amount
})

export const setFinalPrice = (finalPrice: number) => ({
  type: SET_FINAL_PRICE,
  payload: finalPrice
})

export const setCoverage = (coverage: ICoverage) => ({
  type: SET_COVERAGE,
  payload: coverage
})

export const restoreAmounts = () => ({type: RESTORE_STATE})