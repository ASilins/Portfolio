import { useState, useRef } from "react";

import { Image } from "../image/Image"
import HeaderAnimation from "../../animations/HeaderAnimation";
import TextAnimation from "../../animations/TextAnimation";
import useScreenSize from "../../hooks/useScreenSize";
import { useOnScroll } from "../../hooks/useOnScroll";

import "./showcase.scss";


function Showcase(props) {

    const width = useScreenSize();
    let img;

    let fromTop = 100;
    let imgSize = 35

    if (width >= 480) {
        imgSize = 40;
    }
    else if (width >= 840) {
        imgSize = 45;
    }

    if (props.data.img === null) {
        img = require("../../assets/default.jpg");
    }
    else {
        img = props.data.img;
    }


    const box = useRef(null);
    const text = useRef(null);

    const [top, setTop] = useState(0);

    useOnScroll((scrollY, winHeight) => {

        const boxRect = box.current.getBoundingClientRect();

        const winTop = scrollY;
        const boxTop = boxRect.top + scrollY;
        const boxHeight = boxRect.height;

        const textHeight = text.current.offsetHeight;

        const diff = boxHeight - textHeight;
        const deltaTop = boxTop - textHeight - winTop - fromTop;

        setTop(-clampVal(deltaTop, -diff, 0));
    });

    return (
        <div className="showcase container">
            <div ref={box} className="sc-text">
                <div ref={text} className="scroll" style={{
                    transform: `matrix3d(1, 0, 0, 0, 0, 1, 0,
                     0, 0, 0, 1, 0, 0, ${top}, 0, 1)`,
                    willChange: `transform`
                }}>
                    <h1>
                        <HeaderAnimation className="underline">
                            {props.data.title}
                        </HeaderAnimation>

                    </h1>
                    <h2>
                        <TextAnimation>
                            {props.data.description}
                        </TextAnimation>
                    </h2>
                </div>

            </div>

            <div className="sc-item-3">
                <Image src={img} alt="Project photo" height={`${imgSize}rem`} speed={0.4}>
                </Image>
            </div>
        </div>
    );
}

const clampVal = (num = 0, min = 0, max = 0) => {
    return Math.max(min, Math.min(num, max));
};

export default Showcase;