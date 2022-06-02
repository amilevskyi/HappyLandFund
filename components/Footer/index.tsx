import { Navbar, Container, Row, Col } from "react-bootstrap"
import useTranslation from 'next-translate/useTranslation'


export const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <Navbar bg="primary">
      <Container fluid>
        <Row className="d-flex flex-grow-1 text-white">
          <Col>&#169; {t('footerCopyright')}</Col>
          <Col className="d-flex align-items-center justify-content-end">
            {t('footerCreatedBy')}
            <a href="https://github.com/amilevskyi" target="_blank" rel="noreferrer" className="ps-1 text-white">amilevskyi</a>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}