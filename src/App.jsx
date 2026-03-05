import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Exports from './components/Exports';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Exports />
        {/* <WhyChooseUs />
        <Testimonials /> */}
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
