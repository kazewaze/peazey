import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/header.module.css';
import classes from '../../helpers/classes';
import generateLinks from '../../helpers/links';

const links = generateLinks(['About', 'Contact']);

function MenuButton() {
  return (
    <>
      <input type="checkbox" className={styles.openMobileMenu} id={styles.openMobileMenu} />
      <label htmlFor={styles.openMobileMenu} className={styles.mobileIconToggle}>
        <span className={classes(styles, ["spinner", "diagonal", "one"])}></span>
        <span className={classes(styles, ["spinner", "horizontal"])}></span>
        <span className={classes(styles, ["spinner", "diagonal", "two"])}></span>
      </label>
    </>
  )
}

function MobileMenu({ loggedIn }) {
  return (
    <div id={styles.mobileMenu}>
      <ul className={styles.mobileMenuInner}>
        <li className={styles.menuLogo}>
          <Link href="/">
            <a>
              <strong>Peazey</strong>
            </a>
          </Link>
        </li>
        { links }
        {loggedIn ? <Link href="/api/auth/logout">Logout</Link> : <Link href="/api/auth/login">Login</Link> }
      </ul>
    </div>
  )
}

export default function Header({ loggedIn }) {
  return (
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.imgWrapper}>
            <Link href="/">
              <Image height={"35px"} width={"135px"} className={styles.logo} src="/peazey.svg" alt="Peazey"/>
            </Link>
          </div>
          <hr className={styles.hLine}/>
          <ul className={styles.links}>
            { links }
            { loggedIn ? <Link href="/api/auth/logout">Logout</Link> : <Link href="/api/auth/login">Login</Link> }
          </ul>
          <MenuButton />
          <MobileMenu loggedIn />
        </nav>
      </header>
  )
}