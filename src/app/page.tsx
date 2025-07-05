import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Footer from '@/sections/Footer';
import Contact from "@/sections/Contact";
import Head from 'next/head';

export default function Home() {
  return (
    <>
    <Head>
        <title>Pritesh Patel – Frontend Engineer</title>
        <meta name="description" content="Pritesh Patel's personal portfolio showcasing UI/UX skills, frontend projects, and contact details." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Pritesh Patel – Frontend Engineer" />
        <meta property="og:description" content="Checkout my projects and design skills!" />
        <meta property="og:image" content="https://priteshpatel.dev/og-image.png" />
        <meta property="og:url" content="https://priteshpatel.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://priteshpatel.dev" />
    </Head>
    <main>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
