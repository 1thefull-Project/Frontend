// import App from "next/app";
import 'semantic-ui-css/semantic.min.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import { Global } from "@emotion/react";
import '../styles/NotoSansKR.css';
import { reset } from "../styles/reset";
import Header from '../components/header';
import Footer from '../components/Footer';
import '../styles/responsive.css';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>

      <Header />
        <div>
          <Global styles={reset} />
          <Component {...pageProps} />
        </div>
      <Footer />
        

    </div>
    
  );
}


export default MyApp;