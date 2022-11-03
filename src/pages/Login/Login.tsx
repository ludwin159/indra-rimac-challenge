import FooterCopy from '../../components/FooterCopy'
import { Info, FormLogin } from '../../components/pages/Login'

const Login = () => {
  return (
    <div className="Login">
      <div className="Login__banner">
        <div className="Login__info">
          <Info />
        </div>
        <div className="Login__copy">
          <FooterCopy/>
        </div>
      </div>

      <div className="Login__form">
        <FormLogin />
      </div>
    </div>
  )
}

export default Login
