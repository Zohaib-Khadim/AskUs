import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './pages/HeroSection'
import Upcoming from './pages/Upcoming'
import Subscription from './pages/Subscription'

function App() {
 

  return (
    <>
    <div className='bg-gradient-to-r from-black to-blue-500 min-h-screen'>
    <Navbar/>
    <HeroSection/>
    <Upcoming/>
    <Subscription/>
    <Footer/>
    </div>
    </>
    
  )
}

export default App
