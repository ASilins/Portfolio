import "./underConstruction.scss"
import { Link } from "react-router-dom";

function UnderConstruction() {
    document.title = "Under construction";

    return (
        <div className="container" id="constructContainer">
            <Link to="/" id="logo" className="nav-item">/AS</Link>
            <h2 id="oops">Oops!</h2>
            <h1 id="mainText">
                Under <br /> Construction
            </h1>
        </div>

    )
}

export default UnderConstruction;