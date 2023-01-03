import { useCallback, useEffect, useState } from "react";

export default function useStateWithValidation(validateFunc, initialValue) {
    const [state, setState] = useState(initialValue)
    const [isValid, setIsValid] = useState(() => validateFunc(state))

    const onChange = useCallback(
        nextState => {
            const value =
                typeof nextState === 'function' ? nextState(state) : nextState
            setState(value)
            setIsValid(validateFunc(value))
        },
        [validateFunc]
    )

    return [
        state,
        onChange,
        isValid
    ]
}