import useCookie from "../hooks/useCookie"

export default function CookieComp() {
    const [value, update, remove] = useCookie("name", "Join")

    return (
        <>
            <div>{value}</div>
            <button onClick={() => update('Vien')}>Update cookie</button>
            <button onClick={() => remove()}>Remove cookie</button>
        </>
    )
};
