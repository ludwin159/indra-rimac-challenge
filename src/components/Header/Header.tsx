import { useNavigate } from 'react-router-dom'

import { IHeader } from '../components'
import { LogoRimac, loginImages } from '../../assets'

const Header = ({bgColor = 'Header__white'}: IHeader) => {
  const navigate = useNavigate()
  return (
    <div className={`Header ${bgColor}`}>
      <div className='Header__container'>
        <img onClick={() => navigate('/')} src={LogoRimac} alt="Logo del rimac" />
        <button className='Header__button Header__button__mobile'>
          <img src={loginImages.IconTel} alt="Icono de llamadas" />
          Llámanos
        </button>

        <div className='Header__button__desktop'>
          <p>¿Tienes alguna duda?</p>
          <a href='tel:(01) 411 6001' className='Header__button' >
            <img src={loginImages.IconTel} alt="Icono de llamadas" />
            (01) 411 6001
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header
