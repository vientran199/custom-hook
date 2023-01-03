import useAsync from "../hooks/useAsync"

export default function AsyncComp() {
    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = false
            setTimeout(() => {
                success ? resolve('Hi') : reject('Error')
            }, 2000)
        })
    })
    return (<div>
        <div>Value: {value}</div>
        <div>{loading && 'Loading...'}</div>
        <div>{error && 'Error'}</div>
    </div>)
}