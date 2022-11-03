import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import {
  AddOrremove,
  AmountClient,
  InfoUser,
  Pagination,
  Price,
} from '../../components/pages/BuildPlan'
import { cars, ICars } from '../../db/cars.data'
import { IRootState } from '../../redux/types'
import { scrollTop } from '../../utils/functions'

const BuildPlan = () => {
  const { placa } = useSelector((state: IRootState) => state.User)
  const indexCar = Number(placa.slice(-1))
  const car: ICars = cars[indexCar]

  useEffect(() => {
    scrollTop()
  }, [])
  return (
    <div className="BuildPlan">
      <div className="BuildPlan__pagination">
        <Pagination />
      </div>

      <div className="BuildPlan__description">
        <div className="BuildPlan__info">
          <InfoUser brand={car.brand} model={car.model} year={car.year} />
        </div>

        <div className="BuildPlan__price">
          <Price />
        </div>

        <AddOrremove />
      </div>

      <div className="BuildPlan__amount">
        <AmountClient />
      </div>
    </div>
  )
}

export default BuildPlan
