import { ChangeEvent, ReactNode } from 'react'

export interface IHeader {
  neutrals?: boolean
}

export interface IInput {
  id: string
  label: string
  type?: 'text' | 'number'
  value: string | number
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface ICheckbox {
  isActive: boolean
  setIsActive: (boolean) => void
  children?: ReactNode
}

export interface IButton {
  children: ReactNode
  type?: 'button' | 'submit'
  w100?: boolean
  variant?: 'circle' | 'rectangle' | 'outline'
  onClick?: () => void
  color?:
    | 'red'
    | 'blue'
    | 'gray_1'
    | 'gray_2'
    | 'gray_3'
    | 'gray_4'
    | 'gray_5'
    | 'gray_6'
    | 'white'
    | 'neutrals'
    | 'green'
}

export interface IButtonType {
  rectangle: JSX.Element
  circle: JSX.Element
  outline: JSX.Element
}

export interface IOptions {
  text: string
  value: string | number
}

export interface ISelect {
  id: string
  options: IOptions[]
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
  value: string | number
}

export interface IHeader {
  bgColor?: 'Header__neutrals' | 'Header__white'
}


export interface IInputPrice {
  priceMin?: number
  priceMax?: number
}


export interface ITabItem {
  isExpand?: boolean
  title: string
  icon: string
  info: string
  isChecked: boolean
}
