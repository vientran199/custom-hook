import { useState } from "react"
import useEventListener from "../hooks/useEventListener"

export default function EventListenerComp() {
    const [key, setKey] = useState()
    useEventListener("keydown", e => {
        setKey(e.key)
    })
    return (<>
        key: {key}
    </>)
}