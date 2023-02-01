import Header from "../../components/header/Header";
import "./UnderConstruction.css"

function UnderConstruction() {
    document.title = "Under construction";

    return (
        <div className="container" id="constructContainer">
            <Header />
            <h2 id="oops" className="col-1-2 row-3-1">Oops!</h2>
            <h1 className="underline center row-4-2 col-1-4 col-2-2-M row-3-2-M" id="mainText">Under Construction</h1>
        </div>

    )
}

export default UnderConstruction;