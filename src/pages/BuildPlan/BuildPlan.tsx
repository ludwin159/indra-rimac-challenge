import { useEffect } from 'react'

import {
  AddOrremove,
  AmountClient,
  InfoUser,
  Pagination,
  Price,
} from '../../components/pages/BuildPlan'
import { cars, ICars } from '../../db/cars.data'
import { randomNumber, scrollTop } from '../../utils/functions'

const BuildPlan = () => {
  const car: ICars = cars[randomNumber(0, 10)]

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
