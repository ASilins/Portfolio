// import { useEffect, useState } from "react";
import useIntersection from "../../../hooks/useIntersection";

import "./techStack.scss";

function TechItem(props) {
    const [ref, observed] = useIntersection({
        threshold: 0.9,
    });

    // const [img, setImg] = useState();

    // useEffect(() => {
    //     fetch(props.img).then(response => response.blob())
    //         .then(imgBlob => setImg(imgBlob));
    // }, []);

    const className = observed ? "techAnimation" : "hidden";

    return (
        <div ref={ref} className={className} id="techItem">
            <p>{props.name}</p>
            <img src="" alt="" />
        </div>
    );
}

export default TechItem;