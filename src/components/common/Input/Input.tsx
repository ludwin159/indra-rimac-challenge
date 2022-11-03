import { ChangeEvent, useState } from 'react'
import { IInput } from '../../components'

const Input = ({
  id,
  label,
  type = 'text',
  state,
  setState,
  required = false,
  maxLength,
  validator,
  textError,
  textUppercase = false,
}: IInput) => {
  const [onFocus, setOnFocus] = useState<boolean>(false)

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target
    setState({
      ...state,
      value: textUppercase ? value.trim().toUpperCase() : value.trim(),
    })
  }

  return (
    <div className="Input">
      <input
        {...{ id, type, required, maxLength }}
        onFocus={() => setOnFocus(true)}
        onBlur={() => {
          !state.value && setOnFocus(false)
          validator
            ? setState({ ...state, isValid: true })
            : setState({ ...state, isValid: false })
        }}
        onKeyUp={() =>
          validator
            ? setState({ ...state, isValid: true })
            : setState({ ...state, isValid: false })
        }
        value={state.value}
        onChange={handleChange}
        className={`Input__input ${state.isValid === false && 'error'}`}
      />
      <label
        className={`Input__label
          ${onFocus ? 'Input__label--active' : ''}
          Input__label__${
            state.isValid === null
              ? 'normal'
              : state.isValid
              ? 'success'
              : 'error'
          }
          `}
        htmlFor={id}
      >
        {onFocus ? label + '*' : label + ':'}
      </label>

      {state.isValid === false && (
        <span className="Input__text__error">{textError}</span>
      )}
    </div>
  )
}

export default Input
