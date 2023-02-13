import TextAnimation from "../../animations/TextAnimation";
import "./footer.scss"

function Footer(props) {
    const styles = {
        color: props.colour || "black",
    };


    return (
        <footer>
            <p id="one" style={styles}>
                <TextAnimation>
                    ARTURS SILINS <br /> Full Stack Developer
                </TextAnimation>

            </p>
            <p id="two" style={styles}>
                <TextAnimation>
                    Developed and Designed <br /> By Arturs Silins
                </TextAnimation>
            </p>
        </footer>
    );
};

export default Footer;