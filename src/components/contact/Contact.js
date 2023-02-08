import "./contact.scss";
import useScreenSize from "../../hooks/useScreenSize";
import PageNumber from "../PageNumber";

function Contact(props) {

    const width = useScreenSize();
    let email = width >= 560 ? "hello@arturssilins.com" : "hello@<br/>arturssilins<br/>.com";

    return (
        <>
            <div className="container" id="contact">

                <PageNumber>
                    <h3>{props.pageNumber}</h3>
                </PageNumber>
                <h1 id="contact-item-1">Want to work together?</h1>
                <h2 id="contact-item-2">Send me a message</h2>
                <h1 id="email" dangerouslySetInnerHTML={{ __html: email }}></h1>
                <div id="links">
                    <a href="https://github.com/ASilins" target="_blank" rel="noopener noreferrer">GitHub, </a>
                    <a href="https://www.linkedin.com/in/arturssilins/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
            </div>
        </>
    );
}

export default Contact;