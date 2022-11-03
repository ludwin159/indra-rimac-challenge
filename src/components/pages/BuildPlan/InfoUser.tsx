import { useSelector } from 'react-redux'

import { IRootState } from '../../../redux/types'
import { IconsBuildPlan } from '../../../assets'
import { Button } from '../../common'
import { goBack } from '../../../utils/functions'
import { ICars } from '../../../db/cars.data'

const InfoUser = ({brand='Chevrolet', year='2019', model= 'Camaro'}: ICars) => {
  const { placa, name } = useSelector((state: IRootState) => state.User);

  return (
    <div className="InfoUser">
      <div className="InfoUser__backButton">
        <Button color="red_2" variant="circle" onClick={() => goBack()}>
          <img src={IconsBuildPlan.IconBackred} alt="Boton atras" />
        </Button>
        volver
      </div>

      <h2 className="InfoUser__h2">Mira las coberturas</h2>
      <h2 className="InfoUser__h2__desktop">
        ¡Hola, <span>{name}!</span>
      </h2>
      <p className="InfoUser__p">Conoce las coberturas para tu plan</p>

      <div className="InfoUser__container">
        <div className="InfoUser__text">
          <p className="InfoUser__placa">Placa: {placa}</p>
          <h1 className="InfoUser__car">{brand} {year} <br /> {model}</h1>
        </div>
        <div>
          <img
            className="InfoUser__img__desk"
            src={IconsBuildPlan.UserImage}
            alt="Imagen de la información"
          />
          <img
            className="InfoUser__img__mobile"
            src={IconsBuildPlan.ImageBanner}
            alt="Imagen de la información"
          />
        </div>
      </div>
    </div>
  )
}

export default InfoUser
