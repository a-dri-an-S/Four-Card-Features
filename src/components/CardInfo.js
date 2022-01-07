const CardInfo = ({ card }) => {
    return (
        <div className="card-info">
            <h2 className="card-title">{card.title}</h2>
            <p className="card-txt">{card.info}</p>
        </div>
    );
}

export default CardInfo;