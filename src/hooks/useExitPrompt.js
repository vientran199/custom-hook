import { useEffect, useState } from "react";

function initBeforeUnload(isShowExitPrompt) {
    window.onbeforeunload = (event) => {
        if (isShowExitPrompt) {
            const e = event || window.event;
            e.preventDefault();
            if (e) {
                e.returnValue = "";
            }
            return "";
        }
    };
}

export default function useExitPrompt(isShowPrompt) {
    const [showExitPrompt, setShowExitPrompt] = useState(isShowPrompt)

    //chua biet tac dung de lam gi
    window.onload = function () {
        initBeforeUnload(showExitPrompt)
    }

    useEffect(() => {
        initBeforeUnload(showExitPrompt)
    }, [showExitPrompt])

    return [showExitPrompt, setShowExitPrompt]
};
