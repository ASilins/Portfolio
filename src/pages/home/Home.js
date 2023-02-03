import "./home.scss"
import Header from "../../components/header/Header";
import imgArturs from "../../assets/arturs.jpg"
import { Link } from "react-router-dom";
import Showcase from "../../components/projectShowcase/Showcase";
import Footer from "../../components/footer/Footer";

function Home() {
    document.title = "Home";

    return (
        <>
            <Header />

            <div id="home1" className="container">
                <h1 id="home-item-1">
                    Full stack <br /> developer
                </h1>

                <div id="home-item-2">
                    <img src={imgArturs} alt="Image of Arturs Silins" />
                </div>
                <h1 id="home-item-3">
                    Arturs Silins
                </h1>
            </div>

            <div className="container">
                <h3 id="home-item-4">About me /01</h3>

                <div id="home-item-5-6">
                    <h2>
                        I am a student software technology engineer passionate
                        in web development and creative design.
                    </h2>
                    <h2>
                        When I'm not developing or studying I'm looking into new
                        technologies or playing golf
                    </h2>
                </div>

                <p id="home-item-7">
                    Currently studying <br /> in Denmark
                </p>

                <p id="home-item-8">
                    I combine my full stack development with creative
                    design for the UI. I stride to improve with every project
                    I work on and use that knowledge in the next one.
                </p>

                <Link to="/" id="home-item-9">
                    <p>More about me</p>
                </Link>
            </div>

            <div id="home3">
                <div className="container">
                    <h3 id="home-item-10">/02</h3>
                    <h1 id="home-item-11">Work</h1>
                </div>

                <Showcase id="1" />
                <Showcase id="1" />
                <Showcase id="1" />
            </div>

            <Footer />
        </>
    )
}

export default Home;