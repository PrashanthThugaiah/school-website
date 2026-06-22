import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AdmissionBanner from "../components/AdmissionBanner";
import AboutSchool from "../components/AboutSchool";
import ChairmanMessage from "../components/ChairmanMessage";
import PrincipalMessage from "../components/PrincipalMessage";
import Facilities from "../components/Facilities";
import Results from "../components/Results";
import Achievements from "../components/Achievements";
import Events from "../components/Events";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AdmissionBanner />
      <AboutSchool />
      <ChairmanMessage />
      <PrincipalMessage />
      <Facilities />
      <Results />
      <Achievements />
      <Events />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}