import useTranslation from "../hooks/useTranslation";

export default function TranslationComp() {
    const { language, setLanguage, setFallbackLanguage, t } = useTranslation()

    return (
        <>
            <div>{language}</div>
            <div>{t('hi')}</div>
            <div>{t('bye')}</div>
            <div>{t('nested.value')}</div>
            <button onClick={() => setLanguage('sp')}>Change to Spanish</button>
            <button onClick={() => setLanguage('en')}>Change to english</button>
        </>
    )
};
