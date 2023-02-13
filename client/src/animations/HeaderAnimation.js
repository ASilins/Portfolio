import "../css/animations.scss";
import useIntersection from "../hooks/useIntersection";

function HeaderAnimation(props) {
    const [ref, observed] = useIntersection({
        threshold: 0.8,
    });

    const array = props.children.toString().split("");

    const className = observed ? "headerAnimation" : "hidden";

    return (
        <span ref={ref} className={`${className} ${props.className}`}>
            {array.map((item, index) => (
                <span key={index}>{item}</span>
            ))}
        </span>
    );
}

export default HeaderAnimation;