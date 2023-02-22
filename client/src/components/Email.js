import useIntersection from "../hooks/useIntersection";
import useScreenSize from "../hooks/useScreenSize";

function Email() {

    const [ref, observed] = useIntersection({
        threshold: 0.8,
    });

    let className = observed ? "textAnimation" : "hidden";

    const width = useScreenSize();

    let email = width >= 550 ? "hello@arturssilins.com" : "hello@<br/>arturssilins<br/>.com";

    return (
        <h1 ref={ref} className={className} dangerouslySetInnerHTML={{ __html: email }}></h1>
    )
};

export default Email;