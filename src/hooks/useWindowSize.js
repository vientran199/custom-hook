import { useEffect, useState } from "react"
import useEventListener from "./useEventListener"

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    //cach 1
    // useEffect(() => {
    //     const reSize = () => {
    //         setWindowSize({
    //             height: window.innerHeight,
    //             width: window.innerWidth
    //         })
    //     }
    //     window.addEventListener('resize', reSize)

    //     return () => window.removeEventListener('resize', reSize)
    // }, [])

    useEventListener('resize', () => {
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth
        })
    })

    return windowSize
}