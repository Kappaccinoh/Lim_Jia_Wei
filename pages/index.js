import Head from 'next/head'
import Main from '../components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lim Jia Wei - CV</title>
        <meta name="description" content="Lim Jia Wei: final-year NUS undergraduate in Computer Science and Physics, working on quantum circuits and Bayesian estimation."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Main/>
    </div>
  )
}
