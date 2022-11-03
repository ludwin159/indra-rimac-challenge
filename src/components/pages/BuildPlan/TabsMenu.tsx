import { useState } from 'react'

import { TabOne } from '.'

const tabsContent: any = {
  0: <TabOne />,
  1: <h2>Contenido 2</h2>,
  2: <h2>Contenido 3</h2>
}

const TabsMenu = () => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <div className="TabsMenu">
      <div className="TabsMenu__tabs">
        <button
          onClick={() => setTabIndex(0)}
          className={tabIndex === 0 ? 'active' : ''}
        >
          Protege a <br /> tu auto
        </button>
        <button
          onClick={() => setTabIndex(1)}
          className={tabIndex === 1 ? 'active' : ''}
        >
          Protege a los <br /> que te rodeaN
        </button>
        <button
          onClick={() => setTabIndex(2)}
          className={tabIndex === 2 ? 'active' : ''}
        >
          mejora tu <br /> plAN
        </button>
      </div>

      <div className='TabsMenu__contain'>
        {tabsContent[tabIndex]}
      </div>
    </div>
  )
}

export default TabsMenu
