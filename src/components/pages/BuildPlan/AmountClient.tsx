import { useSelector } from 'react-redux'

import { IRootState } from '../../../redux/types'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../common'
import { IconsBuildPlan } from '../../../assets'


const AmountClient = () => {
  const { finalPrice } = useSelector((state: IRootState) => state.Amounts)
  const navigate = useNavigate()

  const onBuy = () => navigate('/thanks')

  return (
    <div className="AmountClient">

      <div className='AmountClient__container'>
        <p className="AmountClient__monto">monto</p>
        <h2 className="AmountClient__h2">${finalPrice}.00</h2>
        <p className="AmountClient__p">mensual</p>
      </div>

      <div className='AmountClient__description'>
        <h3>El precio incluye:</h3>
        <div className='AmountClient__item'>
          <img src={IconsBuildPlan.IconCheck} alt="Imagen de llanta de repuesto" />
          <p>Llanta de respuesto</p>
        </div>
        <div className='AmountClient__item'>
          <img src={IconsBuildPlan.IconCheck} alt="Imagen de Análisis de motor" />
          <p>Analisis de motor</p>
        </div>
        <div className='AmountClient__item'>
          <img src={IconsBuildPlan.IconCheck} alt="Imagen de Aros gratis" />
          <p>Aros gratis</p>
        </div>
      </div>

      <Button onClick={onBuy}>lo quiero </Button>
    </div>
  )
}

export default AmountClient
