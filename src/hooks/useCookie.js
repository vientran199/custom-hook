import Cookies from "js-cookie";
import { useCallback, useState } from "react";

export default function useCookie(name, defaultCookie) {
    const [value, setValue] = useState(() => {
        const cookie = Cookies.get(name)
        if (cookie) return cookie
        Cookies.set(name, defaultCookie)
        return defaultCookie
    })

    const updateCookie = useCallback(
        (newValue, options) => {
            Cookies.set(name, newValue, options)
            setValue(newValue)
        },
        [name]
    )

    const removeCookie = useCallback(
        (options) => {
            Cookies.remove(name, options)
            setValue(null)
        },
        [name]
    )
    return [value, updateCookie, removeCookie]
};
