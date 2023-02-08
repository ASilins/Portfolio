import "./link.scss";

function Link(props) {
    return (
        <div id="link">
            <div>
                <a href={props.link} target="_blank" rel="noopener noreferrer">{props.text}</a>
            </div>
        </div>
    );
}

export default Link;