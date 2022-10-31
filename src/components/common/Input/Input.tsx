import { useState } from 'react'
import { IInput } from '../../components'

const Input = ({ id, label, type='text', onChange, value }: IInput) => {
  const [onFocus, setOnFocus] = useState<boolean>(false)
  return (
    <div className="Input">
      <input
        onFocus={() => setOnFocus(true)}
        onBlur={() => !value && setOnFocus(false)}
        {...{ id, type, onChange, value }}
        className="Input__input"
      />
      <label
        className={`Input__label ${
          onFocus ? 'Input__label--active' : ''
        }`}
        htmlFor={id}
      >
        {onFocus ? label + '*' : label + ':'}
      </label>
    </div>
  )
}

export default Input
