import Button from "../common/Button"

const AmountClient = () => {
  return (
    <div>

      <div className="AmountClient__info">
        <div>
          <h2 className="AmountClient__info__h2">$35.00</h2>
          <p className="AmountClient__info__p">mensual</p>
        </div>

        <Button w100={false}>lo quiero </Button>
      </div>
    </div>
  )
}

export default AmountClient