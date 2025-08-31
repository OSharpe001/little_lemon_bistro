import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import Nav from  "./Nav";

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