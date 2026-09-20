import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>\n        <Component {...pageProps} />\n                <script defer src="/_vercel/insights/script.js" />
      </>
}

export default MyApp
