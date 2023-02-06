import "./Header.css"
import burgerMenu from "../../assets/burger-menu.svg"
import { Link } from "react-router-dom";


function Header() {
    return (
        <header>
            <Link to="/" id="logo" className="nav-item">/AS</Link>
            <br />
            <nav id="desktop">
                <ul>
                    <li>
                        <Link className="nav-item" to="/work" >Work</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/about" >About</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/contact" >Contact</Link>
                    </li>
                </ul>
            </nav>
            <img id="mobile" src={burgerMenu} alt="Burger menu" />
        </header>

    )
}

export default Header;