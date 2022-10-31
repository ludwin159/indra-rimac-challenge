import { TabItem } from '.'
import { ITabItem } from '../components'

import imageTab1 from '../../assets/BuildPlan/IconTab1.svg'
import imageTab2 from '../../assets/BuildPlan/IconTab2.svg'
import imageTab3 from '../../assets/BuildPlan/IconTab3.svg'

const infoTabs: ITabItem[] = [
  {
    title: 'Llanta robada',
    icon: imageTab1,
    info:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis',
    isChecked: true,
  },
  {
    title: ' Choque y/o pasarte la luz roja ',
    icon: imageTab2,
    info:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici',
    isChecked: false,
  },
  {
    title: ' Atropello en la vía Evitamiento ',
    icon: imageTab3,
    info:
      'He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi',
    isChecked: false,
  },
]

const TabOne = () => {
  return (
    <div className="Tab__container">
      {infoTabs.length > 0 &&
        infoTabs.map(({ ...infoTab }, idx) => (
          <TabItem key={idx} {...{ ...infoTab }} isExpand={idx === 0} />
        ))}
    </div>
  )
}

export default TabOne
