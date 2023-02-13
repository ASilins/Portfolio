import { Link } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

import { useState } from "react";
import burgerMenu from "../../assets/burger-menu.svg"
import burgerMenuSelected from "../../assets/burger-menu-selected.svg"
import "./Header.scss"


function Header() {
    const [isOpen, setIsOpen] = useState(false);

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
            <div id="mobile">
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ?
                        <img id="mobile" src={burgerMenuSelected} alt="Burger menu" /> :
                        <img id="mobile" src={burgerMenu} alt="Burger menu" />
                    }
                </button>

                <CSSTransition
                    in={isOpen}
                    timeout={300}
                    classNames="menu"
                    unmountOnExit
                >
                    <nav>
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
                </CSSTransition>
            </div>

        </header>

    )
}

export default Header;