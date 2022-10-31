import { IconTel } from '../../assets/Login/IconTel'
import { LogoRimac } from '../../assets/LogoRimac'
import { IHeader } from '../components'

const Header = ({bgColor = 'Header__white'}: IHeader) => {
  return (
    <div className={`Header ${bgColor}`}>
      <div className='Header__container'>
        <LogoRimac />
        <button className='Header__button Header__button__mobile'>
          <IconTel />
          Llámanos
        </button>

        <div className='Header__button__desktop'>
          <p>¿Tienes alguna duda?</p>
          <button className='Header__button'>
          <IconTel />
          (01) 411 6001
        </button>
        </div>
      </div>
    </div>
  )
}

export default Header
