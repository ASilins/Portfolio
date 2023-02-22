import { Link } from "react-router-dom";
import TextAnimation from "../../animations/TextAnimation";

import "./underConstruction.scss"

function UnderConstruction() {
    document.title = "Under construction";

    return (
        <div className="container" id="constructContainer">
            <Link to="/" id="logo" className="nav-item">/AS</Link>
            <h2 id="oops">
                <TextAnimation>
                    Oops!
                </TextAnimation>
            </h2>

            <h1 id="mainText">
                <TextAnimation className="underline">
                    Under <br /> Construction
                </TextAnimation>
            </h1>
            <p id="release">
                <TextAnimation>
                    Planned release: 21/02/2023
                </TextAnimation>
            </p>
        </div>

    )
}

export default UnderConstruction;