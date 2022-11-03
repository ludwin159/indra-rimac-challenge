import { TabItem } from '.'
import { ITabItem } from '../../components'

import { IconsBuildPlan } from '../../../assets'
import { useSelector } from 'react-redux'
import { IRootState } from '../../../redux/types'

const infoTabs: ITabItem[] = [
  {
    title: 'Llanta robada',
    icon: IconsBuildPlan.IconTab1,
    amount: 15,
    info:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
  },
  {
    title: ' Choque y/o pasarte la luz roja ',
    icon: IconsBuildPlan.IconTab2,
    amount: 20,
    info:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici',
  },
  {
    title: ' Atropello en la vía Evitamiento ',
    icon: IconsBuildPlan.IconTab3,
    amount: 50,
    info:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi',
  },
]

const TabOne = () => {
  const { coverage } = useSelector((state: IRootState) => state.Amounts)
  const { atropello, choque, llanta } = coverage;
  
  const checkVerify = (index: number): boolean | undefined => {
    if (index === 0) return llanta
    if (index === 1) return choque
    if (index === 2) return atropello
  }
  return (
    <div className="Tab__container">
      {infoTabs.length > 0 &&
        infoTabs.map(({ ...infoTab }, idx) => (
            <TabItem key={idx} {...{ ...infoTab, idx }} isCheck={checkVerify(idx)} isExpand={idx === 0} />
          ),
        )}
    </div>
  )
}

export default TabOne
