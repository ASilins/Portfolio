import { Link } from "react-router-dom";

import imgArturs from "../../assets/arturs.jpg"
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import PageNumber from "../../components/PageNumber";
import TextAnimation from "../../animations/TextAnimation";
import HeaderAnimation from "../../animations/HeaderAnimation";
import ShowcaseList from "../../components/projectShowcase/ShowcaseList";

import "./home.scss"
import WorkHeader from "../../components/workHeader/WorkHeader";
import PageTransition from "../../animations/PageTransition";


function Home(props) {
    document.title = "Arturs Silins | Home";

    return (
        <PageTransition>
            <div id="home1" className="container">
                <h1 id="home-item-1">
                    <HeaderAnimation>
                        Full stack
                    </HeaderAnimation>
                    <br />
                    <HeaderAnimation>
                        developer
                    </HeaderAnimation>
                </h1>

                <div id="home-item-2">
                    <img src={imgArturs} alt="" />
                </div>
                <h1 id="home-item-3">
                    <TextAnimation className="underline">
                        Arturs Silins
                    </TextAnimation>
                </h1>
            </div>

            <div className="container">

                <PageNumber>
                    About me /01
                </PageNumber>

                <div id="home-item-5-6">
                    <h2>
                        <TextAnimation>
                            I am a student software technology engineer passionate
                            in web development and creative design.
                        </TextAnimation>
                    </h2>
                    <h2>
                        <TextAnimation>
                            When I'm not developing or studying I'm looking into new
                            technologies or playing golf
                        </TextAnimation>
                    </h2>
                </div>

                <p id="home-item-7">
                    <TextAnimation>
                        Currently studying <br /> in Denmark
                    </TextAnimation>
                </p>

                <p id="home-item-8">
                    <TextAnimation>
                        I combine my full stack development with creative
                        design for the UI. I stride to improve with every project
                        I work on and use that knowledge in the next one.
                    </TextAnimation>

                </p>

                <Link to="/about" id="home-item-9">
                    <TextAnimation>
                        <p>More about me</p>
                    </TextAnimation>
                </Link>
            </div>

            <div id="home3">
                <div id="work">
                    <PageNumber id="home-item-10">
                        /02
                    </PageNumber>
                    {/* <div id="home-item-11">
                        <h1>Work</h1>
                    </div> */}
                    <WorkHeader />
                </div>

                <ShowcaseList data={props.data} />
            </div>

            <Contact pageNumber="Contact /03" />

            <Footer />
        </PageTransition>
    )
}

export default Home;