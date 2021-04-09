import Card from './Card.js';
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
                        hasPrint={card.hasPrint}
                        printPrice={card.printPrice}
                        soldPrint={card.soldPrint}
                        hasSignedPrint={card.hasSignedPrint}
                        signedPrintPrice={card.signedPrintPrice}
                        totalSignedPrint={card.totalSignedPrint}
                        soldSignedPrint={card.soldSignedPrint}
                        hasOriginal={card.hasOriginal}
                        originalPrice={card.originalPrice}
                        solOriginal={card.soldOriginal}
                        price={card.price}
                        isParent={card.isParent}
                        isChild={card.isChild}
                        width={card.width}
                        childArray={card.childArray}
                        />
                    }
                )
            }
        </div>
        <p className='footer'>© 2021 Godfrey Corp.</p>
        </div>
        
    )

}

export default Deck;