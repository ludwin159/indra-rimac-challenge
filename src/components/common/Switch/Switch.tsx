import { ChangeEventHandler } from "react";

const Switch = ({isChecked = false, onChange}: {
  isChecked?: boolean,
  onChange: ChangeEventHandler<HTMLInputElement>
}) => {
  return (
    <label className="Switch">
      <input onChange={onChange} checked={isChecked} type="checkbox" />
      <span className="Switch__span round"></span>
    </label>
  )
}

export default Switch;