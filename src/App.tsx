import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'
import Safety from './components/Safety'
import HowItWorks from './components/HowItWorks'
import Business from './components/Business'
import FAQ from './components/FAQ'
import Download from './components/Download'
import Footer from './components/Footer'
import { Toaster } from 'sonner'
import AgentButton from './components/AgentButton'

function App() {
  return (
    <section className='w-full min-h-dvh'>
      <NavBar/>
      <Hero />
      <Services/>
      <Testimonials />
      <Partners />
      <Safety />
      <HowItWorks />
      <Business />
      <FAQ/>
      <Download />
      <Footer />
      <AgentButton />
      <Toaster position='top-center' />
    </section>
  )
}

export default App
