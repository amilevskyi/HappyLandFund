import useTranslation from 'next-translate/useTranslation'
import { Row, Col, Card } from "react-bootstrap"
import Image from 'next/image'

import { needs } from '#presets/needs.js'

export const Needs = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <h1 id="needs" className="p-5 text-primary text-uppercase fw-bold text-center">{t('needsTitle')}</h1>
      <h6 className="p-2 text-center">{t('needsSubtitle')}</h6>
      <Row>
        {needs.map(({ icon, titleKey }) =>
          <Col key={titleKey} xs={12} md={4} className="p-2">
            <Card className="p-4 text-white fw-bold border-warning bg-warning">
              <Image
                src={`/icons/${icon}.svg`}
                width="60"
                height="60"
                className="p-1"
                alt={icon}
              />
              <Card.Body>
                <Card.Text>{t(`${titleKey}`)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        )}
      </Row>
    </>
  )
}