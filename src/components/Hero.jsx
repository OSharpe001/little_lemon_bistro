import entree from "../assets/images/entree.jpg";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero">
            <div className="greeting">
                <h1>Little Lemon</h1>
                <p>New York City</p>
                <article>
                    We are a (imaginary) family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </article>
                <Link aria-label="On Click" to="/booking" className="button">Reserve a Table</Link>
            </div>
            <div>
                <img
                src={entree}
                alt="entree plate of baggettes stuffed with fresh vegetables"
                />
            </div>
        </section>
    );
};