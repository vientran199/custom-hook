import { useRef, useState } from "react"
import useClickOutSide from "../hooks/useClickOutSide"

export default function ClickOutSideComp() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()

    useClickOutSide(modalRef, () => {
        console.log('test1')
        if (open) {
            console.log('set open false')
            setOpen(false)
        }
    })

    return (
        <>
            <button onClick={() => setOpen(true)}>Click</button>
            <div
                ref={modalRef}
                style={{
                    display: open ? 'block' : 'none',
                    backgroundColor: 'blue',
                    color: 'white',
                    width: '100px',
                    height: '100px',
                    position: 'absolute',
                    top: 'calc(50% -50px)',
                    left: 'calc(50% -50px)',
                }}
            >
                <span>Modal</span>
            </div>
        </>
    )
}