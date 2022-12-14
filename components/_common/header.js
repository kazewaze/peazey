import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/header.module.css';
import classes from '../../helpers/classes';
import generateLinks from '../../helpers/links';

const links = generateLinks(['Explore']);

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
        { links }
        { loggedIn ? (
              <li key={"LogoutKey"}>
                <Link href="/api/auth/logout">Sign out</Link>
              </li>
              ) : (
                <li key={"LoginKey"}>
                  <Link href="/api/auth/login">Sign In</Link>
                </li>
              )}  
              <li className={styles.buildSomethingBtn} key={"buildAndShare"}>
                <Link href="/api/auth/login">Build Something</Link>
              </li>
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
              <Image height={"45px"} width={"145px"} className={styles.logo} src="/peazey.svg" alt="Peazey"/>
            </Link>
          </div>
          <hr className={styles.hLine}/>
          <ul className={styles.links}>
            { links }
            { loggedIn ? (
              <li key={"LogoutKey"}>
                <Link href="/api/auth/logout">Sign out</Link>
              </li>
              ) : (
                <li key={"LoginKey"}>
                  <Link href="/api/auth/login">Sign In</Link>
                </li>
              )}
              <li className={styles.buildSomethingBtn} key={"buildAndShare"}>
                <Link href="/api/auth/login">Build Something</Link>
              </li>
          </ul>
          <MenuButton />
          <MobileMenu loggedIn={loggedIn} />
        </nav>
      </header>
  )
}