import CardInfo from "./CardInfo";
import CardImage from "./CardImage";

const Card = ({ card }) => {
    return (
        <div>
            <CardInfo card={card}/>
            <CardImage image={card.image} alt={card.title}/>
        </div>
    );
}

export default Card;