import useToggle from "../hooks/useToggle"

export default function ToggleComp() {
    const [value, toggleValue] = useToggle(false)

    return (
        <>
            {value.toString()}
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Set true</button>
            <button onClick={() => toggleValue(false)}>set false</button>
        </>
    )
}