import styles from './styles.module.scss'
import Image from 'next/image'
import logo from '../../../public/images/logo.svg'

import Link from 'next/link'

function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <a href="#">
          <Image src={logo} alt="Logo" />
        </a>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/posts">Conteúdos</Link>
          <Link href="/sobre">Quem somos?</Link>
        </nav>

        <a className={styles.readyButton} href="#" type="button">
          Começar
        </a>
      </div>
    </header>
  )
}

export default Header
