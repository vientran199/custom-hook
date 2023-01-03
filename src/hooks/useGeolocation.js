import { useEffect, useState } from "react";

export default function useGeolocation(options) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [data, setData] = useState({})

    useEffect(() => {
        const successHandler = e => {
            setLoading(false)
            setError(null)
            setData(e.coords)
        }

        const failHandler = e => {
            setError(e)
            setLoading(false)
        }

        navigator.geolocation.getCurrentPosition(
            successHandler,
            failHandler,
            options
        )

        const id = navigator.geolocation.watchPosition(
            successHandler,
            failHandler,
            options
        )

        return () => navigator.geolocation.clearWatch(id)

    }, [options])

    return { loading, error, data }
}