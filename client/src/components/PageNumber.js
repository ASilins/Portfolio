import NumberAnimation from "../animations/NumberAnimation";

function PageNumber(props) {
    return (
        <h3 className="pageNumber" id={props.id}>
            <NumberAnimation>
                {props.children}
            </NumberAnimation>
        </h3>
    );
}

export default PageNumber;