import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the Hawaiian Monk Seal Directory" />
        <h1>🦭 </h1>

        <p className="description">
          Coming soon...
          a browsable and searchable seal directory!
        </p>
      </main>

      <Footer />
    </div>
  )
}
