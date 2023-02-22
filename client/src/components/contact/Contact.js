import PageNumber from "../PageNumber";
import TextAnimation from "../../animations/TextAnimation";
import Email from "../Email";

import "./contact.scss";


function Contact(props) {

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
                <div className="email">
                    <Email />
                </div>
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