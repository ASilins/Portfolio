import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Showcase from "../../components/projectShowcase/Showcase";
import WorkHeader from "../../components/workHeader/WorkHeader";
import { useState } from "react";
import "./work.scss";
import PageNumber from "../../components/PageNumber";

function Work() {
    document.title = "Arturs Silins | Work";

    const [option, setOption] = useState("Project");

    const handleClick = (selected) => {
        setOption(selected);
    };

    let text = option === "Project" ?
        `Selection of large project I have worked on.
        A project could be for school, work or project that I've done in my spare time.` :
        "Selection of small projects that I have made in my spare time to learn new things.";

    return (
        <>
            <Header />
            <WorkHeader />
            <div className="container" id="info">
                <PageNumber>
                    <h3>/01</h3>
                </PageNumber>
                <div>
                    <h1 onClick={() => handleClick("Project")}>Projects</h1>
                    <h4>/0#</h4>
                </div>
                <div>
                    <h1 onClick={() => handleClick("Labs")}>Labs</h1>
                    <h4>/0#</h4>
                </div>
                <p>{option}</p>
                <p>{text}</p>
            </div>
            {option === "Project" ?
                <Showcase id="1" /> :
                <>
                    <Showcase id="1" />
                    <Showcase id="1" />
                </>
            }

            <Contact pageNumber="Contact /02" />
            <Footer />
        </>
    );
}

export default Work;