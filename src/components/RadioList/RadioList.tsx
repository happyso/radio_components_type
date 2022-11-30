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
    const { data: brand, isLoading } = useBrand()
    const {
        DetailData,
        isLoading: detailLoading,
        refetch,
        userId,
        setId,
    } = useDetail()
    // const brand = [
    //     {
    //         id: 28,
    //         name: '현대',
    //         auctions_count: 204,
    //     },
    //     {
    //         id: 33,
    //         name: '기아',
    //         auctions_count: 128,
    //     },
    //     {
    //         id: 44,
    //         name: '쉐보레(GM대우)',
    //         auctions_count: 86,
    //     },
    // ]

    const [resultData, setResultData] = useState<Brand[]>([])

    const [selectedValue, setSelectedValue] = useState<String>()
    const [selectedItems, setSelectedItems] = [1, 2, 3] //example;

    function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedValue(event.target.value)
    }

    useEffect(() => {
        setId(selectedValue)
    }, [selectedValue, setId])

    useEffect(() => {
        refetch()
        //console.log(userId)
    }, [userId])

    useEffect(() => {
        setResultData((prev) => {
            return makeTree(prev, Number(selectedValue), DetailData)
        })
    }, [DetailData])

    useEffect(() => {
        setResultData(brand)
    }, [brand])

    if (isLoading) return <p>Loading...</p>
    if (detailLoading) return <p>detail Loading...</p>

    console.log(resultData)
    return (
        <PageLayout>
            {resultData && (
                <RadioButtonGroup
                    label="Select your Brand:"
                    catagory="brand"
                    options={resultData}
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
