import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function NftCoollectionList() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Exp Protocol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
            <div class="relative h-20 w-80 ...">
          <div class="absolute top-0 left-0 h-5 w-30 ...">
            <p>
              ←Back to Collection Page
            </p>
          </div>
          <div class="absolute bottom-0 left-0 h-15 w-30 ...">
            <p className={styles.title}>
              Crypo bar P2P
            </p>
          </div>
          <div class="absolute inset-y-0 right-0 h-20 w-16 ...">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Lend
            </button>
          </div>
        </div>


                <div className={styles.grid}>

                    <a href="" className={styles.card}>
                        <img
                            class="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <p>Crypto bar P2P 11月</p>
                        <p>0.16ETH/D</p>
                        <p>0.2ETH</p>
                        <p>mailicon</p>
                        <button>Borrow</button>
                    </a>

                    <a href="" className={styles.card}>
                        <img
                            class="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <p>Crypto bar P2P 11月</p>
                        <p>0.16ETH/D</p>
                        <p>0.2ETH</p>
                        <p>mailicon</p>
                        <button>Borrow</button>
                    </a>

                    <a href="" className={styles.card}>
                        <img
                            class="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <p>Crypto bar P2P 11月</p>
                        <p>0.16ETH/D</p>
                        <p>0.2ETH</p>
                        <p>mailicon</p>
                        <button>Borrow</button>
                    </a>

                    <a href="" className={styles.card}>
                        <img
                            class="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <p>Crypto bar P2P 11月</p>
                        <p>0.16ETH/D</p>
                        <p>0.2ETH</p>
                        <p>mailicon</p>
                        <button>Borrow</button>
                    </a>

                </div>
            </main>
        </div>
    );
}