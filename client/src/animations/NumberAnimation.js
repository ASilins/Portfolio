import "../css/animations.scss";
import useIntersection from "../hooks/useIntersection";

function NumberAnimation(props) {
    const [ref, observed] = useIntersection({
        threshold: 0.8,
    });

    const className = observed ? "numberAnimation" : "hidden";

    return (
        <span ref={ref} className={`${className} ${props.className}`}>
            {props.children}
        </span>
    );
}

export default NumberAnimation;