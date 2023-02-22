import PageNumber from "../../../components/PageNumber";
import Carousel from "../carousel/Carousel";
import "./hobbies.scss";

function Hobbies() {
    return (
        <>
            <div className="container" id="hobbies">
                <PageNumber>
                    <h3>/03</h3>
                </PageNumber>
                <h1>Hobbies</h1>
                <Carousel />
            </div>
        </>
    );
}

export default Hobbies;