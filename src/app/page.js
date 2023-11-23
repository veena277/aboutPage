import Image from "next/image";
import Header from "./components/landing_page/Header";
import Navbar from "./components/landing_page/Navbar";
import AboutSection from "./components/landing_page/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto  px-900 py-5">
        <Header />
        <AboutSection />
      </div>
    </main>
  );
}
