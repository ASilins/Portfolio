import PageNumber from "../PageNumber";
import Carousel from "./Carousel";
import "./hobbies.scss";

function Hobbies() {
    return (
        <>
            <div className="container" id="hobbies">
                <PageNumber>
                    <h3>/03</h3>
                </PageNumber>
                <h1>Hobbies</h1>
                <div>
                    <Carousel />
                </div>

            </div>
        </>
    );
}

export default Hobbies;