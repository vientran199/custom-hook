import { useEffect, useRef, useState } from "react";

export default function useDebounce(callback, delay, dependence) {
    const valueRef = useRef()

    useEffect(() => {
        valueRef.current = setTimeout(() => {
            callback()
        }, delay)

        return () => {
            valueRef.current && clearTimeout(valueRef.current)
        }
    }, [...dependence, delay])

    useEffect(() => {
        valueRef.current && clearTimeout(valueRef.current)
    }, [])
}