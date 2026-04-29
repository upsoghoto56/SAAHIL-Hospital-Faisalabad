import TopBar from '@/components/TopBar';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import AboutDoctor from '@/components/AboutDoctor';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Reviews from '@/components/Reviews';
import Locations from '@/components/Locations';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <TopBar />
      <NavBar />
      <Hero />
      <AboutDoctor />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <Locations />
      <Contact />
      <Footer />
      <FloatingElements />
    </main>
  );
}
