import '../styles/globals.css'
import '../styles/reset.css'
import Error from './_error.tsx'

function MyApp({ Component, pageProps }) {
  if (pageProps.error) return <Error statusCode={pageProps.error.statusCode}/>
  return <Component {...pageProps} />
}

export default MyApp
