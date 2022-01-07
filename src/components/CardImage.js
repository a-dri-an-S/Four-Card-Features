const CardImage = ({ image, alt }) => {
    return (
        <div className="card-img">
            <img className="card-img" src={image} alt={alt}/>
        </div>
    );
}

export default CardImage;