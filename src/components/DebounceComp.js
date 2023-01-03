import { useState } from "react"
import useDebounce from "../hooks/useDebounce"

export default function DebounceComp() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    useDebounce(() => alert(count), 1000, [count, count1])
    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>Tang</button>
            <button onClick={() => setCount1(prev => prev + 1)}>Tang1</button>
        </>
    )
}