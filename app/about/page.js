import AboutUs from "@/components/AboutUs/About";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="bg-white flex min-h-screen flex-col items-center justify-between w-full ">
      <Navbar />
      {/* <About_Section1/> */}

      <AboutUs />

      <Footer />
    </main>
  );
}
