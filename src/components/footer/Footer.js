import "./footer.scss"

function Footer(props) {
    const styles = {
        color: props.colour || "black",
    };


    return (
        <footer>
            <p id="one" style={styles}>ARTURS SILINS <br /> Full Stack Developer</p>
            <p id="two" style={styles}>Developed and Designed <br /> By Arturs Silins</p>
        </footer>
    );
};

export default Footer;