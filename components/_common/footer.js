import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h5>
        <Link href="/">
          <Image height={"35px"} width={"135px"} className={styles.logo} src="/peazey_black.svg" alt="Peazey"/>
        </Link>
      </h5>
      <ul className={styles.footerLinks}>
        <li key={"AboutKey"}>
          <Link href="/about">
            About
          </Link>
        </li>
        <li key={"ContactKey"}>
          <Link href="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <p>Copyright © 2022 Kaycee Ingram</p>
    </footer>
  )
}