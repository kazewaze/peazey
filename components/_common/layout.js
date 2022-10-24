import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'

import Home from '../home'
import LoggedInHome from '../loggedInHome'
import Navbar from './header'
import Footer from './footer'

import styles from '../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

export const siteTitle = 'Peazey'

export default function Layout({ children, loggedIn }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta
          name="author"
          content="Kaycee Ingram"
        />
        <meta
          name="description"
          content="A pretty awesome project. Stay tuned!"
        />
        <meta
          property="og:image"
          content="/favicon.svg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content="https://www.peazey.com" />
        <meta property="og:site_name" content="Peazey" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
          {
            loggedIn ? (
              <>
                <Navbar loggedIn />
                  <div className={ styles.container }>
                    <div className={ utilStyles.introContainer }>
                      <LoggedInHome />
                    </div>
                  <main>{ children }</main>
                </div>
              </>
            ) : (
              <>
              </>
            )
          }
        {
          !loggedIn && (
            <>
              <Navbar />
                <div className={ styles.container }>
                  <div className={ utilStyles.introContainer }>
                    <Home />
                  </div>
                <main>{ children }</main>
              </div>
            </>
          )
        }
      <Footer/>
    </>
  )
}