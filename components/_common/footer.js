import Link from 'next/link'
import Image from 'next/image'

// import utilStyles from '../../styles/utils.module.css'
import styles from '../styles/footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="/">
        <Image height={"50px"} width={"150px"} className={styles.logo} src="/peazey.svg" alt="Peazey"/>
      </Link>
      <p>Copyright © 2022 Kaycee Ingram</p>
    </footer>
  )
}