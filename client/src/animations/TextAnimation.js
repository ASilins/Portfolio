import "../css/animations.scss";
import useIntersection from "../hooks/useIntersection";

function TextAnimation(props) {
    const [ref, observed] = useIntersection({
        threshold: 0.8,
    });

    const className = observed ? "textAnimation" : "hidden";

    return (
        <span ref={ref} className={`${className} ${props.className}`} style={props.style}>
            {props.children}
        </span>
    );
}

export default TextAnimation;