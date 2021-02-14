import react, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { AnimateSharedLayout, motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../styles/Card.scss';

const Card = (props) => {
    const [body, setBody] = useState(false);
    const [tapped, setTapped] = useState(false);

    const [type, setType] = useState(() => {
        if (props.hasPrint) {
            return 'print';
        } else {
            return 'print sold out';
        }
    });
    
    
    const fade = useSpring({ opacity: 1, from: { opacity: 0 } });

    const opppositeBody = () => {
        if (body === true) {
            setBody(false);
        } else {
            setBody(true);
        }
    }

    const hoverSpecial = () => {
        if (tapped === false) {
            setBody(false);
        } else {
            return null;
        }
    }
    const hoverFunc = () => hoverSpecial();

    const touchSpecial = () => {
        if (tapped === false) {
            setBody(true);
            setTapped(true);
        } else {
            setBody(false);
        }
    }
    const touchFunc = () => touchSpecial();
    
    useEffect(() => {
    })

    return (
        <AnimateSharedLayout>
            <animated.div style={fade} className="total-container">
                <motion.div onHoverStart={() => setBody(true)} onHoverEnd={hoverFunc} onTap={touchFunc} className="image-container">
                    <img className="image" src={props.image} />
                </motion.div>
                
                {body ? 
                    <motion.div animate={{ y: 180 }} className="body-container">
                        <div className="title-area">
                            <h1>{props.title}</h1>
                            <DropdownButton id="drop" variant="info" title={type}>
                                {props.hasPrint ? <Dropdown.Item as="button" onClick={() => setType('print')}>print</Dropdown.Item> : <Dropdown.ItemText>print sold out</Dropdown.ItemText>}
                                {props.hasSignedPrint ? <Dropdown.Item as="button" onClick={() => setType('signed print')}>signed print</Dropdown.Item> : <Dropdown.ItemText>signed print s/o</Dropdown.ItemText>}
                                {props.hasOriginal ? <Dropdown.Item as="button" onClick={() => setType('original')}>original</Dropdown.Item> : <Dropdown.ItemText>original s/o</Dropdown.ItemText>}
                            </DropdownButton>
                        </div>
                        <h3 className="date">{props.date}</h3>

                        {type === 'print' ? <h6 className="description">{props.soldPrint} / ∞ sold</h6> : <span></span>}
                        {type === 'signed print' ? <h6 className="description">{props.soldSignedPrint} / 20 sold</h6> : <span></span>}
                        {type === 'original' ? <h6 className="description">0 / 1 sold</h6> : <span></span>}

                        {type === 'print' ? <Button id="buy-button" variant="outline-info" size="md">buy ${props.printPrice}</Button> : <span></span>}
                        {type === 'signed print' ? <Button id="buy-button" variant="outline-info" size="md">buy ${props.signedPrintPrice}</Button> : <span></span>}
                        {type === 'original' ? <Button id="buy-button" variant="outline-info" size="md">buy ${props.originalPrice}</Button> : <span></span>}
                    </motion.div>

                    : 

                    <motion.div animate={{ y: 0 }} className="body-container-up">
                        <div className="title-area">
                            <h1>{props.title}</h1>
                            <DropdownButton id="drop" variant="info" title={type}>
                                {props.hasPrint ? <Dropdown.Item as="button" onClick={() => setType('print')}>print</Dropdown.Item> : <Dropdown.ItemText>print sold out</Dropdown.ItemText>}
                                {props.hasSignedPrint ? <Dropdown.Item as="button" onClick={() => setType('signed print')}>signed print</Dropdown.Item> : <Dropdown.ItemText>signed print s/o</Dropdown.ItemText>}
                                {props.hasOriginal ? <Dropdown.Item as="button" onClick={() => setType('original')}>original</Dropdown.Item> : <Dropdown.ItemText>original s/o</Dropdown.ItemText>}
                            </DropdownButton>
                        </div>
                        <h3 className="date">{props.date}</h3>

                        {type === 'print' ? <h6 className="description">{props.soldPrint} / ∞ sold</h6> : <span></span>}
                        {type === 'signed print' ? <h6 className="description">{props.soldSignedPrint} / 20 sold</h6> : <span></span>}
                        {type === 'original' ? <h6 className="description">0 / 1 sold</h6> : <span></span>}

                        {type === 'print' ? <Button id="buy-button" variant="outline-info" size="md">buy ${props.printPrice}</Button> : <span></span>}
                        {type === 'signed print' ? <Button id="buy-button" variant="outline-info" size="md">buy ${props.signedPrintPrice}</Button> : <span></span>}
                        {type === 'original' ? <Button id="buy-button" variant="outline-info" size="md">buy ${props.originalPrice}</Button> : <span></span>}
                    </motion.div>
                }

                
            </animated.div>
        </AnimateSharedLayout>
        
    )
}

export default Card;