import PageNumber from "../PageNumber";
import TechItem from "./TechItem";
import "./techStack.scss";
import Record from "./records.json";

function TechStack() {
    let items = [];

    for (let i = 0; i < Record.length; i++) {
        items.push(<TechItem key={i} name={Record[i]} />);
    }

    return (
        <>
            <div className="container" id="techStack">
                <PageNumber>
                    <h3>/02</h3>
                </PageNumber>
                <h1>Tech Stack</h1>
                <div>
                    {items}
                </div>
            </div>
        </>
    );
}

export default TechStack;