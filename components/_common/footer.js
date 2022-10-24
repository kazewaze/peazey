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
      <p>Copyright © 2022 Kaycee Ingram</p>
    </footer>
  )
}