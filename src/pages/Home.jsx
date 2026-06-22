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

      <section id="hero">
        <Hero />
      </section>

      <section id="admissions">
        <AdmissionBanner />
      </section>

      <section id="about">
        <AboutSchool />
      </section>

      {/* <ChairmanMessage /> */}
      {/* <PrincipalMessage /> */}

      <section id="facilities">
        <Facilities />
      </section>

      <Results />
      <Achievements />

      <section id="gallery">
        <Events />
      </section>

      <Testimonials />

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}