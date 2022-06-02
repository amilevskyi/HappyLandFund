import useTranslation from 'next-translate/useTranslation'

import { News as NewsComponent } from '#components/News'

export const News = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <h1 className="p-5 text-primary text-uppercase fw-bold text-center">{t('newsTitle')}</h1>
      <NewsComponent showCount={3} />
    </>
  )
}