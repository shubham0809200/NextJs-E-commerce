import { useEffect } from 'react';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-serve-side');
    if(jssStyles){
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (<StoreProvider><Component {...pageProps} /></StoreProvider>) ;
}

export default MyApp;
