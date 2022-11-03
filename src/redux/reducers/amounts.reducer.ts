import { RESTORE_STATE, SET_AMOUT, SET_COVERAGE, SET_FINAL_PRICE } from "../actions/amounts.actions"
import { IAmounts, IAmountsAction } from "../types"


const pricesAnCoverage = {
  amount: 12500,
  finalPrice: 20,
  coverage: {
    llanta: false,
    choque: false,
    atropello: false
  }
}
const amounts = window.localStorage.getItem('amounts')
const initialState: IAmounts = amounts ? JSON.parse(amounts) : pricesAnCoverage

const Amounts = (state=initialState, action: IAmountsAction) => {
  const {type, payload} = action

  switch (type) {
    case SET_AMOUT:
      return { ...state, amount: state.amount + payload }
    
    case SET_FINAL_PRICE:
      return {...state, finalPrice: state.finalPrice + payload}

    case SET_COVERAGE:
    return {...state, coverage: {...state.coverage, ...payload }}

    case RESTORE_STATE:
    return pricesAnCoverage

    default:
      return state
  }
}

export default Amounts