import { useNavigate } from "react-router-dom"

import Button from "../../common/Button"
import { IconsBuildPlan } from '../../../assets'
import { goBack } from "../../../utils/functions"

const Pagination = () => {
  const navigate = useNavigate()
  const { IconBack, Progress } = IconsBuildPlan

  return (
    <div className="Pagination">
      
      <div className="Pagination__mobile">
        <Button variant="circle" onClick={() => goBack()}>
          <img src={IconBack} alt="retroceder" />
        </Button>

        <p className="Pagination__p">Paso 2 de 2</p>
        <div className="Pagination__box"/>
      </div>

      <div className="Pagination__desktop">
        <div className="Pagination__desktop__container">

          <div className="Pagination__desktop__buttons">
            <Button color='gray_4' variant="circle" onClick={() => navigate('/')}>1</Button>
            <img src={Progress} alt="Barra progresiva" />
            <Button background="blue" variant="circle">2</Button>
          </div>
          <div className="Pagination__desktop__p">
            <p className="Pagination__desktop__pdisabled">Datos</p>
            <p>Arma tu plan</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Pagination