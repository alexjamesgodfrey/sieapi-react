import { arrayTypeAnnotation } from '@babel/types';
import React, { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastBody from 'react-bootstrap/ToastBody';
import ToastHeader from 'react-bootstrap/ToastHeader';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';
import Card from './Card.js';
import '../styles/Deck.scss';

const Deck = (array) => {
    const [minutes, setMinutes] = useState(0);

    const delay = ms => new Promise(res => setTimeout(res, ms));

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
            <Toast className="info-toast">
                <Toast.Header>
                    <strong className="mr-auto">info</strong>
                    <small>{minutes} minutes ago</small>
                </Toast.Header>
                <Toast.Body>a warm welcome from sierra. click on or hover over a piece to view its medium, 
                    materials used, and other info.
                    use the dropdown to select either, print, signed print, or original. 
                    click buy to become a patron.
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