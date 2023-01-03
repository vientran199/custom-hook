import useGeolocation from "../hooks/useGeolocation"

export default function GeolocationComp() {
    const {
        loading,
        error,
        data: {
            latitude,
            longitude,
        }
    } = useGeolocation()

    return (
        <>
            <div>Loading: {loading && 'loading'}</div>
            <div>Error: {error && error.message}</div>
            {latitude} x {longitude}
        </>
    )
}