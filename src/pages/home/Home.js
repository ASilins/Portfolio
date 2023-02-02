import "./Home.css"
import Header from "../../components/header/Header";
import imgArturs from "../../assets/arturs.jpg"
import { Link } from "react-router-dom";

function Home() {
    document.title = "Home";

    return (
        <>
            <Header />

            <div id="home1" className="container parallax-container">
                <h1 id="fullStack" className="upper center-y-ML col-1-4 row-3-1 
                        col-1-2-ML row-2-ML col-1-4-L col-2-4-XL">
                    Full stack <br /> developer
                </h1>

                <div id="arturs" className="center-y-ML align-right-ML col-1-4 
                    row-5-2 row-4-2-M row-2-ML col-3-2-ML col-5-4-L col-7-6-XL">
                    <img src={imgArturs} alt="Image of Arturs Silins" />
                </div>
                <h1 className="upper underline align-right-ML col-1-4 row-7-1
                         row-6-1-M row-4-1-ML col-3-2-ML col-5-4-L col-9-4-XL">
                    Arturs Silins
                </h1>
            </div>

            <div className="container">
                <h3 id="home-item-4" className="align-right col-1-4 col-7-2-L col-11-2-XL">About me /01</h3>

                <div className="col-1-4 row-2-3 row-2-2-M row-2-1-ML col-1-8-L col-3-8-XL">
                    <h2 className="upper">
                        I am a student software technology engineer passionate in web development and creative design.
                    </h2>
                    <h2 id="text2" className="upper">
                        When I'm not developing or studying I'm looking into new technologies or playing golf
                    </h2>
                </div>

                <p id="home-item-7" className="col-1-3 row-6-1 col-1-2-M row-5-1-M row-3-1-ML col-1-4-L col-3-3-XL">
                    Currently studying <br /> in Denmark
                </p>
                <p id="home-item-8" className="align-right align-left-L 
                        col-1-4 row-7-1 row-5-2-M col-3-2-M row-3-1-ML col-5-4-L col-8-3-XL">
                    I combine my full stack development with creative
                    design for the UI. I stride to improve with every project
                    I work on and use that knowledge in the next one.
                </p>

                <Link to="/" className="align-right align-left-L decoration-none col-3-2 
                        row-8-1 row-4-1-ML col-5-4-L col-8-3-XL">
                    <p className="underline">More about me</p>
                </Link>
            </div>
        </>
    )
}

export default Home;