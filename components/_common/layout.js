import Head from 'next/head'
// import Link from 'next/link'
// import Image from 'next/image'

import Navbar from './header'
import Footer from './footer'

import styles from '../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'

const siteTitle = 'Peazey'

export default function Layout({ children, user, loggedIn }) {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
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
                    {/* <div className={ utilStyles.introContainer }>
                      
                    </div> */}
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
                  {/* <div className={ utilStyles.introContainer }>
                  </div> */}
                <main>{ children }</main>
              </div>
            </>
          )
        }
      <Footer/>
    </>
  )
}