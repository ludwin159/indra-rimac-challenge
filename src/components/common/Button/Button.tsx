import { IButton, IButtonType } from '../../components'

const Button = ({
  children,
  type,
  w100 = true,
  variant = 'rectangle',
  color = 'gray_6',
  onClick = () => {},
  background = 'transparent',
  disabled = false,
}: IButton) => {
  const types: IButtonType = {
    rectangle: (
      <button
        className={`Button ${w100 && 'Button__full'} ${disabled && 'disabled'}`}
        {...{ type, onClick, disabled }}
      >
        {children}
      </button>
    ),
    circle: (
      <button
        className={`Button Button__circle Button__circle__${color} Button__circle__${background} ${
          disabled && 'disabled'
        }`}
        {...{ type, onClick, disabled }}
      >
        {children}
      </button>
    ),
    outline: (
      <button
        className={`Button Button__outline Button__outline__${color} ${
          disabled && 'disabled'
        }`}
        {...{ type, onClick, disabled }}
      >
        {children}
      </button>
    ),
  }

  return types[variant]
}

export default Button
