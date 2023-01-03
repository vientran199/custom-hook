import useStateWithValidation from "../hooks/useStateWithValidation"

export default function StateWithValidationComp() {
    const [value, setValue, isValid] = useStateWithValidation(
        value => value.length > 5,
        ""
    )
    return (
        <>
            <div>Validate: {isValid.toString()}</div>
            <input value={value} onChange={e => setValue(e.target.value)} /> {/*prev => prev +1*/}
        </>
    )
}