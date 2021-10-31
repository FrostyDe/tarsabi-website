import Head from 'next/head'
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Feature from "../components/Feature";
import Faq from "../components/Faq";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Welcome to Tarsabi</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Navbar */}
      <Navbar />

      <div className="px-6 md:px-10 lg:px-20">
        {/* Header */}
        <Header />

        {/* About */}
        <About />

        {/* Feature */}
        <Feature />

        {/* Services */}
        <Services />

        {/* Faq */}
        <Faq />

        {/* Testimoni */}
        <Testimonial />

        {/* Contact */}
        <Contact />
      </div>
      <footer>
        <p className="font-light text-xs text-gray-500 text-center py-8">
          Copyright © 2021 | Tarsabi All Right Reserved
        </p>
      </footer>
    </div>
  );
}
