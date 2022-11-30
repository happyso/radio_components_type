import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '../axiosInstance'
import { Brand } from '../types/types'

async function getBrand(): Promise<Brand[]> {
    const { data } = await axiosInstance.get('/brand.json')
    return data
}

export function useBrand(): { data: Brand[]; isLoading: boolean } {
    const fallback: Brand[] | undefined = []
    const { data = fallback, isLoading } = useQuery(['brand'], getBrand)
    return { data, isLoading }
}
