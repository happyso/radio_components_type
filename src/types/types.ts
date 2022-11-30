import { InputHTMLAttributes } from 'react'

export interface IOption {
    id: number
    name: string
    auctions_count: number
    disabled?: boolean
}

export interface IInputGroup {
    label: string
    catagory: string
    options: IOption[]
    hasFullWidth?: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export interface InputElementProps
    extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    id: string
    error?: boolean
    disabled?: boolean
}

export interface Id {
    id: number
}

export interface Brand extends Id {
    name: string
    auctions_count: number
}
