import "./UnderConstruction.css"
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

function UnderConstruction() {
    document.title = "Under construction";

    return (
        <div className="container" id="constructContainer">
            <Link to="/" id="logo" className="nav-item col-1-2 row-1 col-1-M row-1-M">/AS</Link>
            <h2 id="oops" className="col-1-2 row-3-1 col-1-M row-2-1-ML col-1-2-L col-2-2-XL">Oops!</h2>
            <h1 id="mainText" className="underline center row-4-2 col-1-4 col-2-2-M 
                    row-3-2-M row-2-ML col-3-4-L col-5-4-XL">
                Under <br /> Construction
            </h1>
        </div>

    )
}

export default UnderConstruction;