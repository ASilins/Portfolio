import { useState, useRef } from "react";
import { useOnScroll } from "../../hooks/useOnScroll";

import "./workHeader.scss";

function WorkHeader() {

    const box = useRef(null);
    const text = useRef(null);

    const [top, setTop] = useState(0);
    // const [font, setFont] = useState(100);

    useOnScroll((scrollY, winHeight) => {

        const boxRect = box.current.getBoundingClientRect();

        const winTop = scrollY;
        const boxTop = boxRect.top + scrollY;
        const boxHeight = boxRect.height;

        const textHeight = text.current.offsetHeight;

        const diff = boxHeight - textHeight - 450;
        const deltaTop = boxTop - textHeight - winTop;

        setTop(-clampVal(deltaTop, -diff, 0));
        // setFont(-clampVal(deltaFont, -diff, 0));

        // console.log(deltaTop);
    });

    return (
        <div ref={box} id="workHeader">
            <h1 ref={text} style={{
                transform: `matrix3d(1, 0, 0, 0, 0, 1, 0,
                     0, 0, 0, 1, 0, 0, ${top}, 0, 1)`,
                willChange: `transform`,
            }}>Work</h1>
        </div>
    );
}

const clampVal = (num = 0, min = 0, max = 0) => {
    return Math.max(min, Math.min(num, max));
};

export default WorkHeader;