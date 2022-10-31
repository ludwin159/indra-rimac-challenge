import Header from '../../components/Header'
import { FormLogin } from '../../components/Login/FormLogin'
import { Info } from '../../components/Login/Info'

const Login = () => {
  return (
    <div className="Login">

      <Header bgColor='Header__neutrals'/>
      
      <div className="Login__banner">
        <div className="Login__info">
          <Info />
        </div>
        <div className="Login__copy">
          <p>© 2021 RIMAC Seguros y Reaseguros.</p>
        </div>
      </div>

      <div className="Login__form">
        <FormLogin />
      </div>
    </div>
  )
}

export default Login
