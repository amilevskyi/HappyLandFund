import useTranslation from 'next-translate/useTranslation'

import styles from './about.module.css'

export const About = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <h1 id="about" className="p-5 text-primary text-uppercase fw-bold text-center">{t('aboutTitle')}</h1>
      <h6 className={`p-2 ${styles.text}`}>{t('aboutText')}</h6>
    </>
  )
}