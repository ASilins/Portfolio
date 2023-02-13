import "./carousel.scss";

function Card(props) {
    const classes = props.className + " card";
    return (
        <div className={classes}>
            {/* <h1>{props.hobbie}</h1>
            <img src="" alt="Hobbie" />
            <p>{props.description}</p> */}
        </div>
    );
}

export default Card;