import useDarkMode from "../hooks/useDarkMode"
import '../styles.css'

export default function DarkModeComp() {
    const [darkMode, setDarkMode] = useDarkMode()

    return (
        <>
            <button
                onClick={() => setDarkMode(prev => !prev)}
                style={{
                    border: `1px solid ${darkMode ? 'white' : 'black'}`,
                    backgroundColor: 'none',
                    color: `${darkMode ? 'white' : 'black'}`
                }}
            >Toggle dark mode</button>
        </>
    )
}