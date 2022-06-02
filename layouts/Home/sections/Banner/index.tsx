import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Row, Col, Button } from 'react-bootstrap'
import { useRouter } from 'next/router'

import styles from './banner.module.css'

export const Banner = () => {
  const { t } = useTranslation('home');
  const { push } = useRouter();

  const onClick = () => push('/#support');

  return (
    <div className={styles.container}>
      <Image
        src="/images/banner.png"
        width="1400"
        height="450"
        alt=""
      />
      <Row className={styles.row}>
        <Col xs={12} md={6} className={`text-white ${styles.text}`}>
          <h3 >{t('bannerTitle')}</h3>
          <h3>{t('bannerInfo')}</h3>
        </Col>
        <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
          <Button variant="primary" size="lg" onClick={onClick}>{t('helpButton')}</Button>
        </Col>
      </Row>
    </div>
  )
}