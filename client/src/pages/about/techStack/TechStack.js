import PageNumber from "../../../components/PageNumber";
import TechItem from "./TechItem";
import "./techStack.scss";
import Record from "./records.json";
import HeaderAnimation from "../../../animations/HeaderAnimation";

function TechStack(props) {
    let items = [];

    for (let i = 0; i < Record.length; i++) {
        items.push(<TechItem key={i} name={Record[i]} />);
    }

    const stack = props.data.map((item, index) =>
        <TechItem key={index} name={item.name} />
    )

    return (
        <>
            <div className="container" id="techStack">
                <PageNumber>
                    <h3>/02</h3>
                </PageNumber>

                <h1>
                    <HeaderAnimation>
                        Tech Stack
                    </HeaderAnimation>
                </h1>

                <div>
                    {stack}
                </div>
            </div>
        </>
    );
}

export default TechStack;