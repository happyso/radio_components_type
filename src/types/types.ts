import { InputHTMLAttributes } from 'react'

export interface IOption {
    id: number
    name: string
    username: string
    email: string
    title?: string
    disabled?: boolean
    child?: BrandDetail[]
}

export interface IOption2 {
    id: number
    username: string
    email: string
    title: string
    disabled?: boolean
    child?: BrandDetail[]
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
    username: string
    email: string
    child?: BrandDetail[]
}

export interface BrandDetail extends Id {
    title: string
    username: string
    email: string
    child?: BrandDetail[]
}

export interface Users extends Id {
    name: string
    username: string
    email: string
}
