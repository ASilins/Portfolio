import TextAnimation from "../../animations/TextAnimation";
import "./footer.scss"

function Footer(props) {
    const styles = {
        color: props.colour || "black",
    };


    return (
        <footer>
            <p id="one">
                <TextAnimation style={styles}>
                    ARTURS SILINS <br /> Full Stack Developer
                </TextAnimation>

            </p>
            <p id="two">
                <TextAnimation style={styles}>
                    Developed and Designed <br /> By Arturs Silins
                </TextAnimation>
            </p>
        </footer>
    );
};

export default Footer;