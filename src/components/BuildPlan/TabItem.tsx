import Switch from '../common/Switch'

import Button from '../common/Button'
import { MoreOrLess } from '../../assets/BuildPlan/MoreOrLess'
import { useState } from 'react'
import { ITabItem } from '../components'

const TabItem = ({isExpand, title, icon, info, isChecked}: ITabItem) => {
  const [show, setShow] = useState(isExpand)
  const [check, setCheck] = useState(isChecked)
  return (
    <div className="Tab__item">
      <div>
        <img src={icon} alt={`Icono de ${title}`} />
      </div>

      <div className="Tab__item__contain">
        <div className="Tab__item__title">
          <h2 className="Tab__item__h2">{title}</h2>
          <Switch isChecked={check} onChange={() => setCheck(!check)} />
        </div>

          <p className={`Tab__item__paragraph Tab__item__paragraph__${!show ? 'noshow' : 'show'}`}>
            {info}
          </p>

        <Button variant='outline' color={!show ? 'blue' : 'gray_3'} onClick={() => setShow(!show)} >
          {!show ? 'ver más'  : 'ver menos'}
          <MoreOrLess {...{show}} />
        </Button>
      </div>
    </div>
  )
}

export default TabItem
