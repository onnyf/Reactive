import "./App.css"
import About from "./components/About"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"


const App =()=>{
  return(
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </>
  )
}


export default App