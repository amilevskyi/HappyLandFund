import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import { Row, Col, Card, Button } from "react-bootstrap"
import { useRouter } from 'next/router'

import { news } from '#presets/news.js'
import styles from './news.module.css'

export const News = ({ showCount = news.length, isShowAll = true }) => {
  const { t } = useTranslation('news');
  const { push } = useRouter();

  const handleNews = id => () => push(`/news/${id}`);

  const hadleAllNews = () => push('/news');

  const preparedNews = news.slice(0, showCount);

  return (
    <Row>
      {preparedNews.map(({ id, date, images }) =>
        <Col key={id} xs={12} md={4} className="p-2">
          <Card className="cursor-pointer" border="primary" onClick={handleNews(id)}>
            <Image
              src={`/images/news/${id}/${images[0]}`}
              width="150"
              height="200"
              alt=""
            />
            <Card.Body>
              <Card.Title>{t(`title${id}`)}</Card.Title>
              <Card.Text className={styles.text}>{t(`text${id}`)}</Card.Text>
            </Card.Body>
            {/* <Card.Footer className="bg-primary text-white border-primary">
              <small>{date}</small>
            </Card.Footer> */}
          </Card>
        </Col>
      )}
      {isShowAll && <Button variant="link" onClick={hadleAllNews}>{t('allBtn')}</Button>}
    </Row>
  )
}
