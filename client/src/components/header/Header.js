import { Link } from "react-router-dom";
import { useState } from "react";

import "./Header.scss"

function Header() {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    // toggle burger menu change
    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu menu-visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu menu-hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return (
        <header>
            <Link to="/" id="logo">/AS</Link>
            <br />
            <nav className="desktop">
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
            <div className="mobile">

                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                </nav>

                <div className={menu_class}>
                    <nav>
                        <ul>
                            <li>
                                <Link className="nav-item" to="/work" onClick={updateMenu}>Work</Link>
                            </li>
                            <li>
                                <Link className="nav-item" to="/about" onClick={updateMenu}>About</Link>
                            </li>
                            <li>
                                <Link className="nav-item" to="/contact" onClick={updateMenu}>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

        </header >

    )
}

export default Header;