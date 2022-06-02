import { Navbar } from "react-bootstrap"
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export const Logo = () => {
  const { t } = useTranslation('common')

  return (
    <Link href="/">
      <Navbar.Brand className="cursor-pointer text-white">
        {t('headerTitle')}
      </Navbar.Brand>
    </Link>

  )
}