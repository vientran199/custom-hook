import useEventListener from './useEventListener'

export default function useClickOutSide(elementRef, callback) {
    useEventListener(
        'click',
        e => {
            console.log('test')
            if (elementRef.current === null || elementRef.current.contains(e.target)) return
            console.log('test2')
            callback(e)
        },
        document
    )
}