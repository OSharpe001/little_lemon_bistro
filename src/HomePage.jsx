import About from "./components/About";
import Hero from "./components/Hero";
// import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";
import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <>
            <Hero />
            <section className="declare1">
                <h2>This week's specials!</h2>
                <Link aria-label="On Click" to="/order" className="button">Online Menu</Link>
            </section>
            <br/>
            {/* <Specials /> */}
            <h2 className="declare2">Testimonials</h2>
            <Testimonials />
            <br/>
            <About />
        </>
    );
};