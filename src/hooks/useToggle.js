import { useState } from "react";

export default function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)

    function toggleValue(newValue) {
        setValue(prev => typeof newValue === "boolean" ? newValue : !prev)
    }

    return [value, toggleValue]
}