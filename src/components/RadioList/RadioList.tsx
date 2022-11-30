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
    const { data, isLoading } = useBrand()
    const brand = [
        {
            id: 28,
            name: '현대',
            auctions_count: 204,
        },
        {
            id: 33,
            name: '기아',
            auctions_count: 128,
        },
        {
            id: 44,
            name: '쉐보레(GM대우)',
            auctions_count: 86,
        },
    ]
    const [selectedValue, setSelectedValue] = useState<String>(brand[0].name)

    function radioGroupHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setSelectedValue(event.target.value)
    }

    useEffect(() => {
        console.log(selectedValue)
    }, [selectedValue])

    return (
        <PageLayout>
            <RadioButtonGroup
                label="Select your drink:"
                catagory="brand"
                options={brand}
                onChange={radioGroupHandler}
            />
        </PageLayout>
    )
}
