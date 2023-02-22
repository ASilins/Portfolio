import HeaderAnimation from "../../animations/HeaderAnimation";
import TextAnimation from "../../animations/TextAnimation";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import PageNumber from "../../components/PageNumber";
import TechStack from "./techStack/TechStack";
import PageTransition from "../../animations/PageTransition";

import "./about.scss";

function About(props) {
    document.title = "Arturs Silins | About"
    return (
        <PageTransition>
            <div className="container" id="aboutTop">
                <PageNumber>
                    <h3>/01</h3>
                </PageNumber>
                <h1 id="item-1">
                    <HeaderAnimation>
                        Passionate
                    </HeaderAnimation>
                    <br />
                    <HeaderAnimation>
                        Full Stack Developer
                    </HeaderAnimation>
                </h1>
                <p id="item-2">
                    <TextAnimation>
                        Currently based <br />in Denmark
                    </TextAnimation>

                </p>
                <p id="item-3">
                    <TextAnimation>
                        I am a student software engineer
                        studying in Denmark. I'm passionate about Full
                        Stack Development and always want to learn new skills.
                        On every project I give my best so that I can improve more each time.
                    </TextAnimation>
                </p>
                <p id="item-4">
                    <TextAnimation>
                        Each project is an opportunity to learn not only
                        in coding but also other fields like art and math.
                    </TextAnimation>
                </p>
            </div>

            <TechStack data={props.data} />
            {/* <Hobbies /> */}
            <div className="temp">
                <h1>*Part of page under construction*</h1>
            </div>
            <Contact pageNumber="Contact /05" />
            <Footer />
        </PageTransition>
    );
}

export default About;