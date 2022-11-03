import { ReactNode } from "react"
import Header from "../components/Header"

interface ICustomRoute {
  children: ReactNode
  header?: 'Header__neutrals' | 'Header__white'
}

const CustomRoute = ({children, header}: ICustomRoute) => {
  return <div>
    <Header bgColor={header} />
    {children}
  </div>
}

export default CustomRoute