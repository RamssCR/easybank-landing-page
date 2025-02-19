import { useState, useEffect } from 'react'

export const useApi = <T,>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setError(null)

        const fetchData = async () => {
            try {
                const response = await fetch(url)
                const jsonifiedResponse: T = await response.json()
                setData(jsonifiedResponse)
            } catch (error) {
                setError((error as Error).message)
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { data, loading, error }
}