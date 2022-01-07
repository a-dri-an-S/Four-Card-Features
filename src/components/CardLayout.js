import Card from "./Card";
import { data } from '../data';

const CardLayout = () => {
    return (
        <section>
            {data.map((card, idx) => {
                return <Card key={idx} card={card}/>
            })}
        </section>
    );
}

export default CardLayout;