import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import Layout from '../Components/Layout'
import Dashboard from './dashboard';
import {useState,useEffect} from 'react'

function MyApp({ Component, pageProps, ...appProps }) {

  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  }

  else {

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>

    )
  }


}

export default MyApp
