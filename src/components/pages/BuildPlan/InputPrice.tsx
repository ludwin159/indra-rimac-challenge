import { useDispatch, useSelector } from 'react-redux'

import { IconMoreorLes } from '../../../assets/BuildPlan/IconMoreorLes'
import { IRootState } from '../../../redux/types'
import { setAmount } from '../../../redux/actions/amounts.actions'

const InputPrice = () => {
  const amounts  = useSelector((state: IRootState) => state.Amounts)
  const dispatch = useDispatch()

  const increase = () => {
    16500 > amounts.amount && dispatch(setAmount(100))
  }
  
  const decrease = () => {
    12500 < amounts.amount && dispatch(setAmount(- 100))
  }

  return (
    <div className="InputPrice">
      <button onClick={decrease}>
        <IconMoreorLes isMore={false} />
      </button>

      <p className="InputPrice__price">$ {amounts.amount.toLocaleString('en-US')}</p>

      <button onClick={increase}>
        <IconMoreorLes />
      </button>
    </div>
  )
}

export default InputPrice
