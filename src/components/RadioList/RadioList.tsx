import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useBrand } from '../../hooks/useBrand'
import RadioButtonGroup from '../RadioGroup/RadioGroup'

const PageLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    align-items: center;
    min-height: 100vh;
`

export default function RadioList() {
    const { data: brand, isLoading, status } = useBrand()
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

    const [selectedValue, setSelectedValue] = useState<String>()

    function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedValue(event.target.value)
    }

    useEffect(() => {
        console.log(selectedValue)
    }, [selectedValue])

    if (isLoading) return <p>Loading...</p>

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
