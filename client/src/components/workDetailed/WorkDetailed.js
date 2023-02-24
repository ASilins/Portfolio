import useScreenSize from "../../hooks/useScreenSize";
import { Image } from "../image/Image";
import "./workDetailed.scss";

function WorkDetailed(props) {

    const width = useScreenSize();
    let img = require("../../assets/default.jpg");
    let imgSize = 35;

    if (width >= 480 && width < 840) {
        imgSize = 40;
    }
    else if (width >= 840) {
        imgSize = 45;
    }

    // if (props.data.img === null) {
    //     img = require("../../assets/default.jpg");
    // }
    // else {
    //     img = props.data.img;
    // }

    return (
        <div className="workDetailed">
            <div>
                <div className="container">
                    <h1 className="underline">
                        Project Title
                    </h1>
                    <h2>
                        Project description
                    </h2>

                    <p><a href="">Link to page</a></p>

                </div>
                <div className="workImageOne">
                    <Image src={img} alt="Project photo" height={`${imgSize}rem`} speed={0.4} />
                </div>

            </div>
        </div>
    );
};

export default WorkDetailed;