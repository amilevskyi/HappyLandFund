import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Container, Row, Col } from "react-bootstrap"

import { News as NewsComponent } from '#components/News'

import { news } from '#presets/news.js'
import styles from './news-entity.module.css'


export const NewsEntity = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { id } = router.query;

  const entity = news.find(entity => entity.id === +id);

  return (
    <>
      <Head>
        <title>{t('common:headerTitle')} - {t(`news:title${id}`)}</title>
      </Head>
      <Container>
        <h1 className="p-5 text-primary text-uppercase fw-bold text-center">{t(`news:title${id}`)}</h1>
        {/* <small className="text-muted">{entity?.date}</small> */}
        <Image
          src={`/images/news/${id}/${entity?.images?.[0]}`}
          width="1200"
          height="500"
          alt=""
        />
        <p className={styles.text}>{t(`news:text${id}`)}</p>
        {entity?.images?.length ? (
          <Row>
            {entity.images.map(src =>
              <Col xs={12} md={6} key={src}>
                <Image
                  src={`/images/news/${id}/${src}`}
                  width="600"
                  height="350"
                  alt=""
                />
              </Col>
            )}
          </Row>
        ) : null}
        <h1 className="p-5 text-primary text-uppercase fw-bold text-center">{t('news:latestTitle')}</h1>
        <NewsComponent showCount={3} />
      </Container>
    </>
  )
}