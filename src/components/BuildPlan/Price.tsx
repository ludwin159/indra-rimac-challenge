import InputPrice from "./InputPrice"

const Price = () => {
  return (
    <div className="Price">
      <div>
        <p className="InfoUser__car">Indica la suma asegurada</p>
        <div className="Price__minmax">
          <p className="Price__p">MIN $12.500  </p>
            <svg width="1" height="16" viewBox="0 0 1 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="1" height="16" fill="#E4E8F7"/>
            </svg>
          <p className="Price__p">MAX $16,500  </p>
        </div>
      </div>
      <div>
        <InputPrice />
      </div>
    </div>
  )
}

export default Price