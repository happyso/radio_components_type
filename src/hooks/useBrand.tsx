import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { axiosInstance } from '../axiosInstance'
import { Brand } from '../types/types'

async function getBrand(): Promise<Brand[]> {
    const { data } = await axiosInstance.get('/users')
    return data
}

async function getDetail(id: string): Promise<Brand[]> {
    const { data } = await axiosInstance.get(`/users/${id}/albums`)
    return data
}

export function useBrand(): {
    data: Brand[] | never[]
    isLoading: boolean
    status: string
} {
    const fallback: Brand[] | undefined = []
    const { status, data = fallback, isLoading } = useQuery(['brand'], getBrand)
    return { data, isLoading, status }
}

export function useDetail(): {
    DetailData: any
    isLoading: boolean
    refetch: any
    userId: number
    setId: any
} {
    const [userId, setId] = useState(0)

    const {
        data: DetailData,
        isLoading,
        refetch,
    } = useQuery(['detail', userId], () => getDetail(String(userId)), {
        refetchOnWindowFocus: false,
        enabled: false,
        keepPreviousData: true,
    })

    return { DetailData, isLoading, refetch, userId, setId }
}
