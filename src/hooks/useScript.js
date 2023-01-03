import useAsync from "./useAsync";

export default function useScript(url) {
    const { loading, error } = useAsync(() => {
        const script = document.createElement('script')
        script.src = url
        script.async = true

        return Promise((resolve, reject) => {
            script.addEventListener("load", resolve)
            script.addEventListener("error", reject)
            document.body.appendChild(script)
        })
    }, [url])
    return { loading, error }
}