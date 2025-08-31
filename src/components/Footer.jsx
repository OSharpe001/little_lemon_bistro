import { Link } from "react-router-dom";

import { footer_logo } from "../assets/images";


export default function Footer() {
    return (
        <footer>
            <div>
                <img
                className="footer-logo"
                src={footer_logo}
                alt="Little Lemon's Logo"
                />
            </div>
            <nav className="footer-nav">
                <p>Doormat Navigation</p>
                <Link aria-label="On Click" to="/" className="nav-item">Home</Link>
                <Link aria-label="On Click" to="/about_us" className="nav-item">About</Link>
                <Link aria-label="On Click" to="/menu" className="nav-item">Menu</Link>
                <Link aria-label="On Click" to="/booking" className="nav-item">Reservations</Link>
                <Link aria-label="On Click" to="/order" className="nav-item">Order Online</Link>
                <Link aria-label="On Click" to="/sign_in" className="nav-item">Login</Link>
            </nav>
            <nav className="footer-nav">
                <p>Contact Us</p>
                <p className="contact-info">(555) 555-5555</p>
                <p className="contact-info">little@lemon.com</p>
                <p className="contact-info">123 Lemon Road<br/> NYC, New York 98765</p>
                <Link aria-label="On Click" target="_blank" to="https://osharpesportfolio.netlify.app" className="nav-item portfolio-link">O. Sharpe's Portfolio</Link>
            </nav>
            <nav className="footer-nav">
                <p>Social Media Links</p>
                <Link aria-label="On Click" to="https://twitter.com" className="nav-item">Twitter</Link>
                <Link aria-label="On Click" to="https://www.facebook.com" className="nav-item">Facebook</Link>
                <Link aria-label="On Click" to="https://www.instagram.com" className="nav-item">Instagram</Link>
            </nav>
        </footer>
    );
};