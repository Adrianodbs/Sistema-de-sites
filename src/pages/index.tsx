import styles from '../styles/home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Apaixonado por tecnologia</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.containerHeader}>
          <section className={styles.ctaText}>
            <h1>Levando você ao próximo nível</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam iure,
              illo dolorum eum ipsa facere iusto.
            </span>
            <a>
              <button>COMEÇAR AGORA!</button>
            </a>
          </section>

          <img src="/images/banner-conteudos.png" alt="Conteúdos" />
        </div>
      </main>
    </>
  )
}
