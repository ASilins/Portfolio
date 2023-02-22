import Card from "./Card";

function Carousel() {
    return (
        <div className="carousel">
            <Card className="card--active" hobbie="Golf" description="some description" />
            <Card className="card--left" hobbie="Chess" description="some description" />
            <Card className="card--right" hobbie="Other" description="some description" />
        </div>
    );
}

export default Carousel;