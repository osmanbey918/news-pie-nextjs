import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Head from 'next/head';
import NewsList from '../components/news/NewsList';

export default function Home() {

  return (
    <div className="">
      <Header />
      <Head>
        <title>news aggregtot</title>
      </Head>
      <h1>latest news</h1>
      <NewsList />
      <h1>Hello Usman Khan</h1>
      {/* <Component {...pageProps} /> */}

      <Footer />
    </div>
  );
}
