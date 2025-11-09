import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <section className='w-full min-h-dvh'>
      <NavBar/>
      <Hero />
      <Services/>
    </section>
  )
}

export default App
