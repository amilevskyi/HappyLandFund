import Image from 'next/image'
import { Row, Col, Card } from "react-bootstrap"
import useTranslation from 'next-translate/useTranslation'

import { support } from '#presets/support.js'

export const Support = () => {
  const { t } = useTranslation('home');

  return <>
    <h1 id="support" className="p-5 text-primary text-uppercase fw-bold text-center">{t('moneyTitle')}</h1>
    {support.map(({ titleKey, entities }) => (
      <Card key={titleKey} className="my-4" border="primary">
        <Card.Header className="text-white border-primary bg-primary text-uppercase fw-bold">{t(`${titleKey}Title`)}</Card.Header>
        <Card.Body>
          <Row xs={1} md={3}>
            {entities.map(({ icon, titleKey, text }) => (
              <Col key={titleKey}>
                <Card className="border-0">
                  <Card.Body>
                    <Card.Title className="d-flex align-items-center">
                      <Image
                        src={`/icons/${icon}.svg`}
                        width="30"
                        height="30"
                        className="pe-2"
                        alt={icon}
                      />
                      <span className="fw-bold text-uppercase">{t(titleKey)}</span>
                      <Image
                        src="/icons/clipboard.svg"
                        width="20"
                        height="20"
                        className="ps-1 cursor-pointer"
                        alt={icon}
                        onClick={() => navigator.clipboard.writeText(text)}
                      />
                    </Card.Title>
                    <Card.Text>{text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row >
        </Card.Body>
      </Card>
    ))}</>
}