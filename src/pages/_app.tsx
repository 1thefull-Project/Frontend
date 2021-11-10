// import App from "next/app";
import 'semantic-ui-css/semantic.min.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import '../styles/responsive.css';
import '../styles/text.css';
import styled from '@emotion/styled';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
      <Footer />
        <Fixbutton>
          <a href = "#">
            <img src = "componentImg/btn_create.png"/>
          </a>
        </Fixbutton>

    </div>
    
  );
}

const Fixbutton = styled.div `
  position: fixed; 
  left: 80.28%;
  right: 6.39%;
  top: 59.22%;
  bottom: 36.55%;
  img {
    width: 50px;
    height: 52.2px;

  }
`;
export default MyApp;