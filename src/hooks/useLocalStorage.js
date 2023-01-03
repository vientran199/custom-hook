import { useEffect, useState } from "react";

function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

export default function useLocalStorage(key, initialValue) {
    const [name, setName] = useState(() => getSavedValue(key, initialValue)) //Arrow func ở đâu thì sẽ không chạy lại func, Nếu để func thì sẽ chạy lại mỗi lần render

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(name))
    }, [name])

    return [name, setName]
}