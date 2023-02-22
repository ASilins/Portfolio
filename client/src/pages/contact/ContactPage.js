import PageTransition from "../../animations/PageTransition";
import TextAnimation from "../../animations/TextAnimation";
import Email from "../../components/Email";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Link from "../../components/link/Link";

import "./contactPage.scss";

function ContactPage() {
    document.title = "Arturs Silins | About";

    return (
        <PageTransition>
            <div id="contactPage">
                <Header />
                <div className="container" id="contactPageTop">
                    <h2>
                        <TextAnimation>
                            Send me a message
                        </TextAnimation>
                    </h2>
                    <Email />
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
        </PageTransition>
    );
}

export default ContactPage;