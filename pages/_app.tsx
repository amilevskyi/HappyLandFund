import type { AppProps } from 'next/app'
import SSRProvider from 'react-bootstrap/SSRProvider';

import '#styles/globals.css'
import { Header } from '#components/Header'
import { Main } from '#components/Main'
import { Footer } from '#components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer />
    </SSRProvider>
  )
}

export default MyApp
