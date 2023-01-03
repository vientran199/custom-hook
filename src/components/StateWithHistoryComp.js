import { useState } from "react"
import useStateWithHistory from "../hooks/useStateWithHistory"

export default function StateWithHistoryComp() {
    const [count, setCount, { back, forward, go, history, pointer }] = useStateWithHistory(1)
    return (<>
        <div>{count}</div>
        <div>{history.join(', ')}</div>
        <div>{pointer}</div>
        <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
        <button onClick={back}>back</button>
        <button onClick={forward}>forward</button>
        <button onClick={() => go(3)}>go 3</button>
    </>)
}