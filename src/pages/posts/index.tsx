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
import { GetStaticProps } from 'next'

import { getPrismicClient } from '../../services/prismic'
import Prismic from '@prismicio/client'
import { RichText } from 'prismic-dom'

type Post = {
  slug: string
  title: string
  cover: string
  description: string
  updatedAt: string
}

interface PostsProps {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  console.log(posts)
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.Predicates.at('document.type', 'post')],
    {
      orderings: '[document.last_publication_date desc]',
      fetch: ['post.title', 'post.description', 'post.cover'],
      pageSize: 3
    }
  )

  const posts = response.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      description:
        post.data.description.find(
          (content: any) => content.type === 'paragraph'
        )?.text ?? '',
      cover: post.data.cover.url,
      updatedAt: post.last_publication_date
        ? new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })
        : ''
    }
  })
  return {
    props: {
      posts
    },
    revalidate: 60 * 30
  }
}
