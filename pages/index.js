import Head from 'next/head'
//import Image from 'next/image'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NFTs DAPP Showcase</title>
        <meta name="description" content="Decentralized app to showcase my own NFT collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>NFTs DAPP showcase</h1>
        <p className={styles.description}>Decentralized app to showcase my own NFT collection.</p>
      </main>
    </div>
  );
}
