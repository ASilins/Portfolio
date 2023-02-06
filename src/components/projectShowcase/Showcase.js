import "./showcase.scss"
import Records from "../../assets/sc-records"
import { Image } from "../image/Image"

function Showcase(protos) {
    let showcase;

    Records.forEach(e => {
        if (e.id === protos.id) {
            showcase = e;
        }
    });

    if (showcase === undefined) {
        showcase = Records[0];
    }

    return (
        <div id="showcase" className="container">
            <div id="sc-text">
                <h1>{showcase.name}</h1>
                <h2>{showcase.description}</h2>
            </div>

            <div id="sc-item-3">
                <Image src={showcase.img} alt={showcase.alt} height="60vh" speed={0.4}>
                </Image>
            </div>
        </div>
    );
}

export default Showcase;