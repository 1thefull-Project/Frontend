// import App from "next/app";
import 'semantic-ui-css/semantic.min.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
    
  );
}

export default MyApp;