import react, {useEffect} from 'react';
import '../styles/Card.scss';

const Card = (props) => {

    const setColor = async () => {
        let id = await props.id;
        console.log(id);
        let color = await props.color;
        console.log(color);
        document.getElementsByClassName("card")[id].style.backgroundColor = color;

    }
    
    useEffect(() => {
        setColor();
    })

    return (
        <div className="card">
            
            <div className="card-front">
                <img className="image" src="" />
            </div>

            <div className="card-back">
                <h1>{props.title}</h1>
                <h3 className="date">{props.date}</h3>
                <p className="description">{props.description}</p>
                <a href="" download><p className="download"></p></a>
            </div>
            
        </div>
    )
}

export default Card;