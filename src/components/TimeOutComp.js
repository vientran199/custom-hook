import { useState } from "react"
import useTimeOut from "../hooks/useTimeOut"

export default function TimeOutComp() {
    const [count, setCount] = useState(0)
    const { reset, clear } = useTimeOut(() => setCount(10), 2000)

    return (
        <>
            {count}
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={clear}>Clear</button>
        </>
    )
}