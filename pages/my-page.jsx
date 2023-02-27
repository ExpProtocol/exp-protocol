import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function MyPage() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Exp Protocol</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div class="relative h-40 w-80 ...">
                    <div class="absolute inset-y-0 left-0 h-10 w-30 ...">
                        <p className={styles.title}>
                            Collection List
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
                        <p>Crypto bar P2P</p>
                    </a>

                    <a href="" className={styles.card}>
                        <img
                            class="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <p>Crypto bar P2P</p>
                    </a>

                    <a href="" className={styles.card}>
                        <img
                            class="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <p>Crypto bar P2P</p>
                    </a>

                    <a href="" className={styles.card}>
                        <img
                            class="rounded-t-lg"
                            src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                            alt="" />
                        <p>Crypto bar P2P</p>
                    </a>

                </div>
            </main>
        </div>
    )
}