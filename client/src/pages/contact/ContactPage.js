import TextAnimation from "../../animations/TextAnimation";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Link from "../../components/link/Link";
import useScreenSize from "../../hooks/useScreenSize";
import "./contactPage.scss";

function ContactPage() {
    document.title = "Arturs Silins | About";

    const width = useScreenSize();

    let email = width >= 550 ? "hello@arturssilins.com" : "hello@<br/>arturssilins<br/>.com";
    return (
        <div id="contactPage">
            <Header />
            <div className="container" id="contactPageTop">
                <h2>
                    <TextAnimation>
                        Send me a message
                    </TextAnimation>
                </h2>
                <h1 dangerouslySetInnerHTML={{ __html: email }}></h1>
                <h2>
                    <TextAnimation>
                        Or connect with<br />me on socials
                    </TextAnimation>
                </h2>
            </div>

            <Link text="Github" link="https://github.com/ASilins" />
            <Link text="LinkedIn" link="https://www.linkedin.com/in/arturssilins/" />
            <Footer colour="#F4E2C0" />
        </div>
    );
}

export default ContactPage;