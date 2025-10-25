import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Contact from "../components/contact";
import Footer from "../components/footer";


export default function Home() {
    return(
        <>
           <section>
                <Navbar/>  
                <div className="p-5" ></div>                
                <Hero/>
                <About/>
                <Contact/>
                <Footer/>
           </section> 
        </>
    )
}