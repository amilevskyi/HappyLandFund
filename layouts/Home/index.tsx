import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Container } from "react-bootstrap"

import { Banner } from './sections/Banner'
import { Subbanner } from './sections/Subbanner'
import { Support } from './sections/Support'
import { Partners } from './sections/Partners'
import { Needs } from './sections/Needs'
import { About } from './sections/About'
import { News } from './sections/News'

export const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('common:headerTitle')} - {t('home:headTitle')}</title>
      </Head>
      <Banner />
      <Container>
        <Subbanner />
        <About />
        <News />
        <Needs />
        <Support />
        <Partners />
      </Container>
    </>
  )
}