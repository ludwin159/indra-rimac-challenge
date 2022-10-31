import { useNavigate } from "react-router-dom"

import Button from "../common/Button"
import back from '../../assets/BuildPlan/IconBack.svg'
import { scrollTop } from "../../utils/functions"

const Pagination = () => {
  const navigate = useNavigate()
  scrollTop()
  return (
    <div className="Pagination">
      <Button variant="circle" onClick={() => navigate('/')}>
        <img src={back} alt="retroceder" />
      </Button>

      <p className="Pagination__p">Paso 2 de 2</p>
      <div className="Pagination__box"/>
    </div>
  )
}

export default Pagination