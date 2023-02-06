import Footer from "../footer/Footer";
import "./contact.scss"

function Contact(protos) {

    return (
        <>
            <div className="container">
                <h3 className="pageNumber">{protos.pageNumber}</h3>
                <h1 id="contact-item-1">Want to work together?</h1>
                <h2 id="contact-item-2">Send me a message</h2>
                <h1 id="email"><span>hello@<br />arturssilins <br />.com </span></h1>
                <div id="links">
                    <a href="https://www.linkedin.com/in/arturssilins/">GitHub,</a>
                    <a href="https://github.com/ASilins">LinkedIn</a>
                </div>
            </div>
        </>
    );
}

export default Contact;