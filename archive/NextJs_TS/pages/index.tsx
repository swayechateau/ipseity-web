import Head from 'next/head'
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Posts from '../components/Posts';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full">
      <Head>
        <title>Portfolio</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <Navigation yAxis={60}/>
      <main className="relative grow">
        <Header />
        <Projects />
        <About />
        <Posts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
