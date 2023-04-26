import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'

import Link from 'next/link'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  const { pathname } = router
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="/">
          <Image src={logo} alt="Logo" />
        </a>
        <nav>
          <Link href="/">
            <p className={pathname === '/' ? 'active' : ''}>Home</p>
          </Link>
          <Link href="/posts">
            <p className={pathname === '/posts' ? 'active' : ''}>Conteúdo</p>
          </Link>
          <Link href="/sobre">
            <p className={pathname === '/sobre' ? 'active' : ''}>Quem somos?</p>
          </Link>
        </nav>

        <a className={styles.readyButton} href="#" type="button">
          Começar
        </a>
      </div>
    </header>
  )
}

export default Header
