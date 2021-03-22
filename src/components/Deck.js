import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import Card from './Card.js';
import '../styles/Deck.scss';

const Deck = (array) => {
    //state
    //toggles shhowing of toast
    const [toast, setToast] = useState(true);
    const toggleToast = () => setToast(false);
    //set toast minutes
    const [minutes, setMinutes] = useState(0);

    //delat function for minutes
    const delay = ms => new Promise(res => setTimeout(res, ms));

    //adds one minute to toast every 1 minute (max 20)
    const minutesFunction = async () => {
        for (let i = 0; i < 20; i++){
            await delay(60000);
            setMinutes(minutes + 1);
            console.log(minutes);
        }
    }

    useEffect(() => {
        minutesFunction();
    })


    return (
        <div className="main-container">
            <Toast show={toast} onClose={toggleToast} className="info-toast">
                <Toast.Header>
                    <strong className="mr-auto">welcome</strong>
                    {minutes > 1 ? <small>{minutes} minutes ago</small> : <small>just now</small>}
                </Toast.Header>
                <Toast.Body id="toast-body">to my website. click on or hover over a piece to view its medium, 
                    materials used, and other info.
                    use the dropdown and buy buttons to become a patron
                </Toast.Body>
            </Toast>
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
                        />
                    }
                )
            }
           
        </div>
        
    )

}

export default Deck;