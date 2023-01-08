import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import useMediaQuery from "./useMediaQuery";

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('useDarkMode', false)
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    const enable = darkMode ?? prefersDarkMode

    useEffect(() => {
        document.body.classList.toggle('dark-mode', enable)
    }, [enable])

    return [enable, setDarkMode]
}