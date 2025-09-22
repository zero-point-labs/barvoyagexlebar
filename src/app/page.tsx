import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Events from '@/components/Events'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <Services />
      <Events />
      <Contact />
      <Footer />
    </div>
  );
}
