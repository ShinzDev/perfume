import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";
import About from "../components/about";

export default function Home() {
    return(
        <>
           <section>
                <Navbar/>  
                <div className="p-5" ></div>                
                <Hero/>
                <About/>
                <Footer/>
           </section> 
        </>
    )
}