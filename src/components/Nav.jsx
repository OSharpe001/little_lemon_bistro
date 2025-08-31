import { Link } from "react-router-dom";
import { useState } from "react";

import { hamburger, close } from "../assets/images";

export default function Nav(props) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

    return (
        <>
            <button className="nav-icon mobile">
                {!mobileNavOpen?
                    <img onClick={toggleMobileNav} src={hamburger} alt="mobile navigation menu (open)"/>
                    :
                    <img onClick={toggleMobileNav} src={close} alt="mobile navigation menu (close)"/>
                }
            </button>
            <nav className={mobileNavOpen?"nav-list mobile":"nav-bar desktop"}>
                <Link aria-label="On Click" onClick={mobileNavOpen?toggleMobileNav:null} to="/" className="nav-item">Home</Link>
                <Link aria-label="On Click" onClick={mobileNavOpen?toggleMobileNav:null} to="/about_us" className="nav-item">About</Link>
                <Link aria-label="On Click" onClick={mobileNavOpen?toggleMobileNav:null} to="/menu" className="nav-item">Menu</Link>
                <Link aria-label="On Click" onClick={mobileNavOpen?toggleMobileNav:null} to="/booking" className="nav-item">Reservations</Link>
                <Link aria-label="On Click" onClick={mobileNavOpen?toggleMobileNav:null} to="/order" className="nav-item">Order Online</Link>
                {props.loggedIn.state ?
                    <Link aria-label="On Click" onClick={mobileNavOpen?toggleMobileNav:null} to="/sign_out" className="nav-item">Logout</Link>
                :
                    <Link aria-label="On Click" onClick={mobileNavOpen?toggleMobileNav:null} to="/sign_in" className="nav-item">Login</Link>
                }
            </nav>
        </>
    );
};