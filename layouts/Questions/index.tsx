import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import { Container, Accordion } from "react-bootstrap"

const keys = ['1', '2', '3', 's4', '5', '6'];

export const Questions = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('common:headerTitle')} - {t('questions:headTitle')}</title>
      </Head>
      <Container>
        <h1 className='p-5 text-primary text-uppercase fw-bold text-center'>{t('questions:headTitle')}</h1>
        <Accordion>
          {keys.map(key => (
            <Accordion.Item key={key} eventKey={key}>
              <Accordion.Header>{t(`questions:q${key}`)}</Accordion.Header>
              <Accordion.Body>{t(`questions:a${key}`)}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </>
  )
}