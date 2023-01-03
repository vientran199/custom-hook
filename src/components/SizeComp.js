import { useRef } from "react"
import useSize from "../hooks/useSize"

export default function SizeComp() {
    const ref = useRef()
    const size = useSize(ref)

    return (
        <div>
            <div>{JSON.stringify(size)}</div>
            <textarea ref={ref}></textarea>
        </div>
    )
}