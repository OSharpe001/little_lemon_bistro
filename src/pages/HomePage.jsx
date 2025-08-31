import { Link } from "react-router-dom";

import {
    About,
    Hero,
    Specials,
    Testimonials
} from "../components";


export default function Homepage() {
    return (
        <>
            <Hero />
            <section className="declare1">
                <h2>This week's specials!</h2>
                <Link aria-label="On Click" to="/order" className="button">Online Menu</Link>
            </section>
            <br/>
            <Specials />
            <h2 className="declare2">Testimonials</h2>
            <Testimonials />
            <br/>
            <About />
        </>
    );
};