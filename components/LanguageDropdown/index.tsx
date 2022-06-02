import { NavDropdown } from "react-bootstrap"
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

export const LanguageDropdown = () => {
  const { locale } = useRouter()
  const { t } = useTranslation('common')

  return (
    <NavDropdown
      title={t(`${locale?.toUpperCase()}`)}
      align="end"
      className="pe-2"
      menuVariant="dark"
      id="language-dropdown"
    >
      <Link href="" locale="ua">
        <NavDropdown.Item href="#/" active={locale === 'ua'} className="text-white">
          {t('UA')}
        </NavDropdown.Item>
      </Link>
      <Link href="" locale="en">
        <NavDropdown.Item href="#/" active={locale === 'en'} className="text-white">
          {t('EN')}
        </NavDropdown.Item>
      </Link>
    </NavDropdown>
  )
}