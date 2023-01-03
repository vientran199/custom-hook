import { useState } from "react";

export default function useArray(initialArray) {
    const [value, setValue] = useState(initialArray)

    const filter = () => {

    }

    return { value }
}