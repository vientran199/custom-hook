import { useEffect } from "react"

export default function useEventListener(
    eventType,
    callback,
    element = window
) {
    const callbackRef = callback

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        const handler = e => callbackRef.current(e)
        element?.addEventListener(eventType, handler)

        return () => element?.removeEventListener(eventType, handler)
    }, [eventType, element])
}