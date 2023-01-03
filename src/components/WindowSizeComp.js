import useWindowSize from "../hooks/useWindowSize"

export default function WindowSizeComp() {
    const { width, height } = useWindowSize()
    return (
        <>
            {width} x {height}
        </>
    )
}