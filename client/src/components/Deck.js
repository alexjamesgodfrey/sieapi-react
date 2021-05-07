import Card from './Card.js';
import Footer from './Footer.js';
import '../styles/Deck.scss';

const Deck = (array) => {

    return (
        <div>
            <h1>aspen by sierra apicella</h1>
        <div className="main-container">
            {
                array.arr.map((card, key) => {
                    return <Card
                        id={key}
                        image={card.image}
                        title={card.title}
                        date={card.date}
                        description={card.description}
                        price={card.price}
                        isParent={card.isParent}
                        isChild={card.isChild}
                        childArray={card.childArray}
                        />
                    }
                )
            }
        </div>
        <Footer />
        </div>
    )

}

export default Deck;