import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Partners from './components/Partners'

function App() {
  return (
    <section className='w-full min-h-dvh'>
      <NavBar/>
      <Hero />
      <Services/>
      <Testimonials />
      <Partners />
    </section>
  )
}

export default App
