import { AddOrremove, AmountClient, InfoUser, Pagination, Price } from '../../components/BuildPlan'

const BuildPlan = () => {
  return (
    <div className="BuildPlan">
      
      <div>
        <Pagination />
      </div>
      
      <div>
        <div className="BuildPlan__info">
          <InfoUser />
        </div>

        <div>
          <Price />
        </div>

        <AddOrremove />
      </div>

      <div>
        <AmountClient />
      </div>

    </div>
  )
}


export default BuildPlan