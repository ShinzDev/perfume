import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Footer from "../components/footer";

export default function Home() {
    return(
        <>
           <section>
                <Navbar/>  
                <div className="p-5" ></div>                
                <Hero/>
                <Footer/>
           </section> 
        </>
    )
}