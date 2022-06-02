import { Container } from "react-bootstrap"
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import styles from './subbanner.module.css'

export const Subbanner = () => {
  const { t } = useTranslation('home');

  return (
    <Container fluid className={`mt-5 ${styles.container}`}>
      <Image
        src="/images/sub-banner.png"
        width="1200"
        height="350"
        alt=""
      />
      <h3 className={`text-white fw-bold ${styles.text}`}>{t('subBannerTitle')}</h3>
    </Container>
  )
}