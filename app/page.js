import Footer from "@/components/Footer";
import Hero from "@/components/Home/Hero";
import HorizontalScrollSection from "@/components/HorizontalScrollSection";
import Navbar from "@/components/Navbar";
import About_Section1 from "@/components/about";
import Head from "next/head";

export default function Home() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between w-full ">
      <Head>
        <title>Vikava Labs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <About_Section1/> */}
      <Hero />
      <HorizontalScrollSection />
      <Footer />
    </main>
  );
}
