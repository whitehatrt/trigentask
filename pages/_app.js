import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'swiper/css';
import '../styles/globals.css'
import {useEffect} from 'react'
import Head from 'next/head'
import axios from 'axios';
axios.defaults.baseURL="http://localhost:3333/"
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof window !== undefined? require('bootstrap/dist/js/bootstrap.bundle'):null
  }, [])
  return <>
   <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
  <Component {...pageProps} />
  </>
}

export default MyApp
