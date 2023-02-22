import "../css/animations.scss";
import useIntersection from "../hooks/useIntersection";

function HeaderAnimation(props) {
    const [ref, observed] = useIntersection({
        threshold: 0.8,
    });

    const className = observed ? "headerAnimation" : "hidden";

    return (
        <span ref={ref} className={`${className} ${props.className}`}>
            {props.children}
        </span>
    );
}

export default HeaderAnimation;