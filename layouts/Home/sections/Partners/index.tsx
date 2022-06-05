import useTranslation from 'next-translate/useTranslation'
import { Row, Col, Card } from "react-bootstrap"
import Image from 'next/image'

import { partners } from '#presets/partners.js'

export const Partners = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <h1 className="p-5 text-primary text-uppercase fw-bold text-center">{t('partnersTitle')}</h1>
      <Row>
        {partners.map(({ link, id }) =>
          <Col key={id} xs={12} md={4} className="p-2">
            <a href={link} target="_blank" rel="noreferrer">
              <Card className="p-3 border-0">
                <Image
                  src={`/images/partners/${id}.png`}
                  width="60"
                  height="60"
                  className="pe-2"
                  alt=""
                />
              </Card>
            </a>
          </Col>
        )}
      </Row>
    </>
  )
}