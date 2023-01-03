import useMediaQuery from "../hooks/useMediaQuery"

export default function MediaQueryComp() {
    const isMatch = useMediaQuery("(min-width:200px)")

    return (
        <>
            Is screen lt 200px: {isMatch.toString()}
        </>
    )
}