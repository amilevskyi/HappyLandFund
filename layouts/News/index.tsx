import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Container } from "react-bootstrap"

import { News as NewsComponent } from '#components/News'

export const News = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('common:headerTitle')} - {t('news:headTitle')}</title>
      </Head>
      <Container>
        <h1 className="p-5 text-primary text-uppercase fw-bold text-center">{t('news:headTitle')}</h1>
        <NewsComponent isShowAll={false} />
      </Container>
    </>
  )
}