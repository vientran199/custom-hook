import { useState } from "react"
import usePrevious from "../hooks/usePrevious"

const PreviousComp = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('test')

    const prevCount = usePrevious(count)
    const prevText = usePrevious(text)

    return (
        <>
            <div>{count} - {prevCount}</div>
            <div>{text} - {prevText}</div>
            <button onClick={() => setCount(prev => prev + 1)}>Count</button>
            <button onClick={() => setText('new Text')}>Text</button>
        </>
    )
}

export default PreviousComp