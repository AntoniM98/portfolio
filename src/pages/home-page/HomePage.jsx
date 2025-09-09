import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProjectGrid from './ProjectGrid';
import About from './About';
import Contact from './Contact';

export default function HomePage() {
  return (
    <>
      <title>Antoni Magendans | Portfolio</title>

      <Header />
      <main> 
        <ProjectGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}