import { useState } from "react"
import { IInputPrice } from "../components"

const InputPrice = ({priceMin = 12500, priceMax = 16500}: IInputPrice) => {
  const [price, setPrice] = useState(priceMin)

  const increase = () => {
    priceMax > price && setPrice(price + 100)
  }

  const decrease = () => {
    priceMin < price && setPrice(price - 100)
  }
  return (
  <div className="InputPrice">
    <button onClick={decrease}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 8L3 8" stroke="#939DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </button>

    <p className="InputPrice__price">
      $ {price.toLocaleString('en-US')}
    </p>

    <button onClick={increase}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 3V13" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 8L3 8" stroke="#6F7DFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    </button>
  </div>
  )
}

export default InputPrice