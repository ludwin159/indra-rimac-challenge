import { ISelect } from '../../components'

const Select = ({
  id,
  options = [],
  placeholder,
  onChange= () => {},
  value,
}: ISelect) => {
  return (
    <select id={id} className="Select" {...{ onChange }}>
      {placeholder && <option value={value}>{placeholder}</option>}
      {options.length > 0 && options.map(({ value, text }) => (
        <option key={value} value={value}>
          {text}
        </option>
      ))}
    </select>
  )
}

export default Select
