import styles from '../styles/home.module.scss'
import Head from 'next/head'

import Image from 'next/image'
import techsImage from '../../public/images/techs.svg'

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

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <section>
            <h2>Aprenda a criar aplicativos para Android e IOS</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              harum veniam architecto itaque officiis.
            </span>
          </section>
          <img src="/images/financasApp.png" alt="Conteúdos mobile" />
        </div>

        <hr className={styles.divisor} />

        <div className={styles.sectionContent}>
          <img src="/images/webDev.png" alt="Conteúdos mobile" />

          <section>
            <h2>Aprenda a criar sistemas web</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              harum veniam architecto itaque officiis.
            </span>
          </section>
        </div>

        <div className={styles.nextLevelContent}>
          <Image quality={100} src={techsImage} alt="tecnologias" />
          <h2>
            Mais de <span className={styles.alunos}>15 mil</span> já levaram sua
            carreira ao próximo nível
          </h2>
          <span>
            E você vai perder a chance de evoluir de uma vez por todas?
          </span>
          <a href="">
            <button>COMEÇAR AGORA!</button>
          </a>
        </div>
      </main>
    </>
  )
}
