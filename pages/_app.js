import NavBar from '../components/NavBar'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'


function MyApp({ session, Component, pageProps }) {
  return (
    <>
    <SessionProvider session={session}>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
    </>
  )
}

export default MyApp
