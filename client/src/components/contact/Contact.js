import "./contact.scss";
import useScreenSize from "../../hooks/useScreenSize";
import PageNumber from "../PageNumber";
import TextAnimation from "../../animations/TextAnimation";
import useIntersection from "../../hooks/useIntersection";

function Contact(props) {
    const [ref, observed] = useIntersection({
        threshold: 0.8,
    });

    let className = observed ? "textAnimation" : "hidden";

    const width = useScreenSize();
    let email = width >= 560 ? "hello@arturssilins.com" : "hello@<br/>arturssilins<br/>.com";

    return (
        <>
            <div className="container" id="contact">
                <PageNumber>
                    <h3>{props.pageNumber}</h3>
                </PageNumber>
                <h1 id="contact-item-1">
                    <TextAnimation className="underline">
                        Want to work together?
                    </TextAnimation>
                </h1>
                <h2 id="contact-item-2">
                    <TextAnimation>
                        Send me a message
                    </TextAnimation>
                </h2>
                <h1 id="email" ref={ref} className={className} dangerouslySetInnerHTML={{ __html: email }}></h1>
                <div id="links">
                    <TextAnimation>
                        <a href="https://github.com/ASilins" target="_blank" rel="noopener noreferrer">GitHub, </a>
                    </TextAnimation>
                    <TextAnimation>
                        <a href="https://www.linkedin.com/in/arturssilins/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </TextAnimation>
                </div>
            </div>
        </>
    );
}

export default Contact;