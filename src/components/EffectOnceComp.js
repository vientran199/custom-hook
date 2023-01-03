import { useState } from "react"
import useEffectOnce from "../hooks/useEffectOnce"

export default function EffectOnceComp() {
    const [count, setCount] = useState(1)

    useEffectOnce(() => alert("hi"))

    return (
        <div>
            {count}
            <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        </div>
    )
}