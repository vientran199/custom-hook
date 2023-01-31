import { useState } from "react";
import useExitPrompt from "../hooks/useExitPrompt";

export default function ExitPromptComp() {
    const [showExitPrompt, setShowExitPrompt] = useExitPrompt(false)
    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowExitPrompt(false)
    }

    return (<div>
        <h3>Form handle exit prompt</h3>
        <input type='text' value={value} onChange={(e) => { setShowExitPrompt(true); setValue(e.target.value) }} />
        <button title="submit" onClick={handleSubmit}>Submit</button>
    </div>)

};
