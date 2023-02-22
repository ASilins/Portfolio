import { useState } from "react";

import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";
import WorkHeader from "../../components/workHeader/WorkHeader";
import PageNumber from "../../components/PageNumber";
import TextAnimation from "../../animations/TextAnimation";

import "./work.scss";
import ShowcaseList from "../../components/projectShowcase/ShowcaseList";
import PageTransition from "../../animations/PageTransition";

function Work(props) {
    document.title = "Arturs Silins | Work";

    const projNr = props.projects.length;
    const labNr = props.labs.length;

    const [option, setOption] = useState("Project");

    const handleClick = (selected) => {
        setOption(selected);
    };

    let text = option === "Project" ?
        `Selection of large project I have worked on.
        A project could be for school, work or project that I've done in my spare time.` :
        "Selection of small projects that I have made in my spare time to learn new things.";

    return (
        <PageTransition>
            <WorkHeader />
            <div className="container" id="info">
                <PageNumber>
                    <h3>/01</h3>
                </PageNumber>
                <div>
                    <h1 onClick={() => handleClick("Project")}>
                        <TextAnimation>
                            Projects
                        </TextAnimation>
                    </h1>
                    <h4>
                        <TextAnimation>
                            /0{projNr}
                        </TextAnimation>
                    </h4>
                </div>
                <div>
                    <h1 onClick={() => handleClick("Labs")}>
                        <TextAnimation>
                            Labs
                        </TextAnimation>
                    </h1>
                    <h4><TextAnimation>
                        /0{labNr}
                    </TextAnimation></h4>
                </div>
                <p>
                    <TextAnimation>
                        {option}
                    </TextAnimation>
                </p>
                <p>
                    <TextAnimation>
                        {text}
                    </TextAnimation>
                </p>
            </div>
            {option === "Project" ?
                <ShowcaseList data={props.projects} /> :
                <>
                    <ShowcaseList data={props.labs} />
                </>
            }

            <Contact pageNumber="Contact /02" />
            <Footer />
        </PageTransition>
    );
}

export default Work;