import styles from './styles.module.scss'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import thumbImg from '../../../public/images/thumb.png'

import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronRight,
  FiChevronsRight
} from 'react-icons/fi'

function Posts() {
  return (
    <>
      <Head>
        <title>Blog | Sujeito Programador</title>
      </Head>
      <main className={styles.container}>
        <div className={styles.posts}>
          <Link href="/">
            <Image
              src={thumbImg}
              alt="post titulo 1"
              width={720}
              height={410}
              quality={100}
            />
            <strong>Criando o meu primeiro aplicativo</strong>
            <time>26/04/2023</time>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </Link>

          <div className={styles.buttonNavigate}>
            <div>
              <button>
                <FiChevronsLeft size={25} color="#fff" />
              </button>
              <button>
                <FiChevronLeft size={25} color="#fff" />
              </button>
            </div>

            <div>
              <button>
                <FiChevronRight size={25} color="#fff" />
              </button>
              <button>
                <FiChevronsRight size={25} color="#fff" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Posts
