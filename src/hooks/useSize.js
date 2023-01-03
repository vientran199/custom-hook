import { useEffect, useState } from "react";

export default function useSize(elementRef) {
    const [size, setSize] = useState({})

    useEffect(() => {
        if (elementRef.current === null) return
        const observer = new ResizeObserver(([entry]) => setSize(entry.contentRect))
        observer.observe(elementRef.current)

        return () => observer.disconnect()
    }, [])

    return size
}