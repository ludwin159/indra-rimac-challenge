import { IButton, IButtonType } from '../../components'

const Button = ({
  children,
  type,
  w100 = true,
  variant = 'rectangle',
  color = 'gray_6',
  onClick = () => {}
}: IButton) => {
  const types: IButtonType = {
    rectangle: (
      <button
        className={`Button ${w100 && 'Button__full'}`}
        {...{ type, onClick }}
      >
        {children}
      </button>
    ),
    circle: (
      <button
        className={`Button Button__circle Button__circle__${color}`}
        {...{ type, onClick }}
      >
        {children}
      </button>
    ),
    outline: (
      <button
        className={`Button Button__outline Button__outline__${color}`}
        {...{ type, onClick }}
      >
        {children}
      </button>
    ),
  }

  return types[variant]
}

export default Button
