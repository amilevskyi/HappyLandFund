import { Nav as BootstrapNav, Navbar } from "react-bootstrap"
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { LanguageDropdown } from '#components/LanguageDropdown'

const links = [
  {
    key: '/#about',
    translationKey: 'navigationAbout',
  },
  {
    key: '/#support',
    translationKey: 'navigationSupport',
  },
  {
    key: '/#needs',
    translationKey: 'navigationNeeds',
  },
  {
    key: '/questions',
    translationKey: 'navigationQuestions',
  }
]

export const Nav = () => {
  const { push, pathname } = useRouter()
  const { t } = useTranslation('common')

  const onSelect = key => push(key)

  return (
    <>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <BootstrapNav
          activeKey={pathname}
          onSelect={onSelect}
        >
          <LanguageDropdown />
          {links.map(({ key, translationKey }, i) => (
            <BootstrapNav.Item key={i} >
              <BootstrapNav.Link eventKey={key} className="text-white">{t(translationKey)}</BootstrapNav.Link>
            </BootstrapNav.Item>
          ))}
        </BootstrapNav >
      </Navbar.Collapse>
    </>
  )
}