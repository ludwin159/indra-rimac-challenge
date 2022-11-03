import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { IRootState } from '../../../redux/types'
import { setCoverage, setFinalPrice } from '../../../redux/actions/amounts.actions'

import { IconsBuildPlan } from '../../../assets'
import { ITabItem } from '../../components'
import { Button, Switch } from '../../common'
import { useLocalStorage } from '../../../hooks/useLocalStorage'

const TabItem = ({ amount, icon, idx, info, isExpand, title, isCheck }: ITabItem) => {
  const [show, setShow] = useState(isExpand)
  const [check, setCheck] = useState(isCheck)
  const [firstTime, setFirstTime] = useState(true)
  const prices = useSelector((state: IRootState) => state.Amounts)
  const [_, setPriceDetail] = useLocalStorage('amounts', '')
  const dispatch = useDispatch()
  const condition = prices.amount > 16000 && idx === 1

  const addOrRemove = (check: boolean) => {
    if (check) dispatch(setFinalPrice(amount))
    if (!check) dispatch(setFinalPrice(-amount))
    setFirstTime(false)

    if (amount === 15) {
      dispatch(setCoverage({llanta: check}))
    } else if (amount === 20) {
      dispatch(setCoverage({choque: check}))
    } else if (amount === 50) {
      dispatch(setCoverage({atropello: check}))
    }
  }

  useEffect(() => {
    setPriceDetail(prices)
  }, [addOrRemove])

  useEffect(() => {
    setFirstTime(false)
  }, [prices.amount])

  useEffect(() => {
    if (condition && check && !firstTime) dispatch(setFinalPrice(-amount))
    if (!condition && check && !firstTime) dispatch(setFinalPrice(amount))
  }, [condition])

  return condition ? (
    <></>
  ) : (
    <div className="Tab__item">
      <div>
        <img src={icon} alt={`Icono de ${title}`} />
      </div>

      <div className="Tab__item__contain">
        <div className="Tab__item__title">
          <h2 className="Tab__item__h2">{title}</h2>

          <div className={`Tab__item__showbutton ${!show ? 'show' : 'noshow'}`}>
            <Button onClick={() => setShow(!show)} variant="outline">
              <img src={IconsBuildPlan.MoreOrless} alt="Mostrar mas o menos" />
            </Button>
          </div>
          <div className="Tab__item__mobilebutton">
            <Switch
              isChecked={isCheck}
              onChange={() => {
                addOrRemove(!check)
                setCheck(!check)
              }}
            />
          </div>
        </div>

        <div
          onClick={() => {
            addOrRemove(!check)
            setCheck(!check)
          }}
          className="Tab__item__buttonDesktop"
        >
          <Button variant="circle">
            <IconsBuildPlan.IconMoreorLes isMore={!isCheck} />
          </Button>
          <p>{isCheck ? 'quitar' : 'agregar'}</p>
        </div>

        <div>
          <p
            className={`Tab__item__paragraph Tab__item__paragraph__${
              !show ? 'noshow' : 'show'
            }`}
          >
            {info}
          </p>
        </div>

        <div className="Tab__item__showMoreMobile">
          <Button
            variant="outline"
            color={!show ? 'blue' : 'gray_3'}
            onClick={() => setShow(!show)}
          >
            {!show ? 'ver más' : 'ver menos'}
            <IconsBuildPlan.MoreOrLess {...{ show }} />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TabItem
