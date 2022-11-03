import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/common'
import FooterCopy from '../../components/FooterCopy'
import { restoreAmounts } from '../../redux/actions/amounts.actions'
import { restartUser } from '../../redux/actions/user.actions'
import { IRootState } from '../../redux/types'

const Thanks = () => {
  const { email } = useSelector((state: IRootState) => state.User)
  const { finalPrice } = useSelector((state: IRootState) => state.Amounts)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const clearData = () => {
    window.localStorage.clear();
    dispatch(restoreAmounts())
    dispatch(restartUser())
    navigate('/')
  }

  console.log({ finalPrice });
  
  return (
    <div className="Thanks">
      <div className="Thanks__contain">
        <div className="Thanks__banner" />
      </div>

      <div className="Thanks__right">
        <div className="Thanks__info">
          <h2 className="Thanks__info__welcome">
            <span>¡Te damos la bienvenida!</span> Cuenta con nosotros para
            proteger tu vehículo
          </h2>

          <p className="Thanks__info__detail">
            Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a
            tu correo: <br /> <span>{email}</span>
          </p>

          <div className="Thanks__button">
            <Button onClick={clearData}>cómo usar mi seguro</Button>
          </div>
        </div>
      </div>

      <div className="Thanks__copy">
          <FooterCopy/>
      </div>
    </div>
  )
}

export default Thanks
