import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useBrand, useDetail } from '../../hooks/useBrand'
import RadioButtonGroup from '../RadioGroup/RadioGroup'
import { Brand, BrandDetail } from '../../types/types'

const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    min-height: 100vh;
`

export default function RadioList() {
    // const { data: brand, isLoading } = useBrand()
    // const {
    //     DetailData,
    //     isLoading: detailLoading,
    //     refetch,
    //     userId,
    //     setId,
    // } = useDetail()
    const brand: Brand[] = [
        {
            id: 28,
            name: '현대',
            username: 'test',
            email: 'test@email.com',
        },
        {
            id: 33,
            name: '기아',
            username: 'test',
            email: 'test@email.com',
        },
        {
            id: 44,
            name: '쉐보레(GM대우)',
            username: 'test',
            email: 'test@email.com',
        },
    ]

    //const [resultData, setResultData] = useState<Brand[]>([])

    const [selectedValue, setSelectedValue] = useState<String>()

    function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedValue(event.target.value)
    }

    return (
        <PageLayout>
            {brand && (
                <RadioButtonGroup
                    label="Select your Brand:"
                    catagory="brand"
                    options={brand}
                    onChange={radioGroupHandler}
                />
            )}
        </PageLayout>
    )
}

function makeTree(
    prevArr: Brand[] | [],
    selectedValue: number,
    addData: BrandDetail[] | []
): Brand[] {
    return (
        addData &&
        prevArr.map((data) =>
            data.id === selectedValue ? { ...data, ['child']: addData } : data
        )
    )
}
