// import App from "next/app";
import 'semantic-ui-css/semantic.min.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import Header from '../components/header';
import Footer from '../components/Footer';
import '../styles/responsive.css';
import '../styles/text.css';
import '../styles/globals.css';
import '../styles/font.css';
import styled from '@emotion/styled';

import { useState } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>

      <Header />
        <div>
          <Component {...pageProps} />
        </div>
      <Footer />
        

    </div>
    
  );
}


export default MyApp;