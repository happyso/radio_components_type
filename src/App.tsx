import React from 'react'
import './App.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import RadioList from './components/RadioList/RadioList'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function App() {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <RadioList />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default App
