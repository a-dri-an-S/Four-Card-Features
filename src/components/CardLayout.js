import Card from "./Card";
import { data } from '../data';

const CardLayout = () => {
    return (
        <section className="cards">
            <Card key={0} card={data[0]}/>
            <div className="cards-middle">
                <Card key={1} card={data[1]}/>
                <Card key={2} card={data[2]}/>
            </div>
            <Card key={3} card={data[3]}/>
        </section>
    );
}

export default CardLayout;