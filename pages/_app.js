import Layout from '@/components/Layout'
import '@/styles/globals.css'
import Context from "../context/context"

export default function App({ Component, pageProps }) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  )
}
