import React from 'react'
import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import RadioList from './components/RadioList/RadioList'

function App() {
    const queryClient = new QueryClient({})

    return (
        <QueryClientProvider client={queryClient}>
            <RadioList />
        </QueryClientProvider>
    )
}

export default App
