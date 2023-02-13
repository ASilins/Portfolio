import NumberAnimation from "../animations/NumberAnimation";

function PageNumber(props) {
    return (
        <div className="pageNumber" id={props.id}>
            <NumberAnimation>
                {props.children}
            </NumberAnimation>
        </div>
    );
}

export default PageNumber;