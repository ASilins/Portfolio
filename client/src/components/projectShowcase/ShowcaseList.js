const { default: Showcase } = require("./Showcase");

function ShowcaseList(props) {
    const showcases = props.data.map((item, index) =>
        <Showcase key={index} data={item} />
    );

    return (
        <>
            {showcases}
        </>
    )
}

export default ShowcaseList;