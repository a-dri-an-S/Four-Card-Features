const CardInfo = ({ card }) => {
    return (
        <div>
            <h2>{card.title}</h2>
            <p>{card.info}</p>
        </div>
    );
}

export default CardInfo;