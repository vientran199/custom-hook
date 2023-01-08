import useCopyToClipboard from "../hooks/useCopyToClipboard"

export default function CopyToClipboardComp() {
    const [copyToClipboard, { success }] = useCopyToClipboard()

    return (<>
        <button
            onClick={() => copyToClipboard('this is text')}
        >
            {success ? 'Copied' : 'Copy text'}
        </button>
        <input type='text' />
    </>)
};
