import useLocalStorage from "./useLocalStorage";
import * as translations from './translations'

export default function useTranslation() {
    const [language, setLanguage] = useLocalStorage('language', 'en')
    const [fallbackLanguage, setFallbackLanguage] = useLocalStorage('fallbackLanguage', 'en')

    const translate = key => {
        const keys = key.split('.')

        return (
            getNestedTranslation(language, keys) ??
            getNestedTranslation(fallbackLanguage, keys) ??
            key
        )
    }

    return {
        language,
        setLanguage,
        fallbackLanguage,
        setFallbackLanguage,
        t: translate
    }
};

function getNestedTranslation(language, keys) {
    return keys.reduce((objs, key) => {
        return objs?.[key]
    }, translations[language])
}