import useScreenSize from "../../hooks/useScreenSize";
import { Image } from "../image/Image";
import "./workDetailed.scss";

function WorkDetailed(props) {

    const width = useScreenSize();
    let img = require("../../assets/default.jpg");
    let imgSize = 45;

    if (width >= 480 && width < 840) {
        imgSize = 55;
    }
    else if (width >= 840) {
        imgSize = 60;
    }

    const data = [
        { id: 1, name: 'Row 1', column2: 'Row 1, Column 2' },
        { id: 2, name2: 'Row 2', column2: null },
        { id: 3, name3: 'Row 3', column2: 'Row 3, Column 2' },
    ];

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