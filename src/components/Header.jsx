import { Link } from "react-router-dom";

import Nav from  "./Nav";
import { logo } from "../assets/images";


export default function Header(props) {

    return (
        <header className="head">
            <Link to="/">
                <img
                className="logo"
                src={logo}
                alt="Little Lemon's banner"
                />
            </Link>
            <Nav
                loggedIn={props.loggedIn}
                setLoggedIn={props.setLoggedIn}
                navigate={props.navigate}
                />
        </header>
    );
};