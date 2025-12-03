import Hero from "./components/Hero"
import NavBar from "./components/NavBar"
import ProductViewer from "./components/ProductViewer"
import gsap from "gsap"
import { ScrollTrigger, SplitText } from "gsap/all"
import ShowCase from "./components/ShowCase"
import Perfomance from "./components/Perfomance"
import Features from "./components/Features"
import Highlights from "./components/Highlights"
import Footer from "./components/Footer"


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
        <NavBar/>
        <Hero/>
        <ProductViewer/>
        <ShowCase/>
        <Perfomance/>
        <Features/>
        <Highlights/>
        <Footer/>
    </main>
  )
}

export default App
