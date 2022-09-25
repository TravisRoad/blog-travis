import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from 'styles/Home.module.css'
import WelcomeCard from 'components/WelcomeCard'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Travis&apos; blog</title>
        <meta name="description" content="Travis' blog site" />
        <link rel="icon" href="favicon.ico" />
      </Head>
     <WelcomeCard />
    </div>
  )
}

export default Home
