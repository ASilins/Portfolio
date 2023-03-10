import useScreenSize from "../../hooks/useScreenSize";
import { Image } from "../image/Image";
import "./workDetailed.scss";

function WorkDetailed() {

    const width = useScreenSize();
    let img = require("../../assets/default.jpg");
    let imgSize = 45;

    if (width >= 480 && width < 840) {
        imgSize = 55;
    }
    else if (width >= 840) {
        imgSize = 60;
    }
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

                </div>

                <div className="workImageOne">
                    <Image src={img} alt="Project photo" height={`${imgSize}rem`} speed={0.2} />
                </div>

                <div className="container workDetails">
                    <table>
                        <tr>
                            <td>Client</td>
                            <td>Lorem Ipsum</td>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default WorkDetailed;