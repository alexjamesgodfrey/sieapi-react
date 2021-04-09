import { useState } from 'react';
import Child from './Child.js';
import PayPal from './PayPal.js'
import OnImagesLoaded from 'react-on-images-loaded';
import Spinner from 'react-bootstrap/Spinner'
import { useSpring, animated } from 'react-spring';
import { motion } from "framer-motion";
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import '../styles/Card.scss';

const Card = (props) => {
    //state for showing description
    const [body, setBody] = useState(false);
    const [tapped, setTapped] = useState(false);
    const [loaded, setLoaded] = useState(false);

    //state for showing paypal modal
    const [showModal, setShowModal] = useState(false);
    const showMod = () => setShowModal(true);
    const hideMod = () => setShowModal(false);

    //todo: add sold out
    const [type, setType] = useState(() => {
        if (props.hasPrint) {
            return 'print';
        } else if (props.hasSignedPrint) 
            return 'signed print';
        else {
            return 'original';
        }
    });
    
    //paypal setup
    const [payPalPrice, setPaypalPrice] = useState(() => {
        if (type === 'print') {
            return props.printPrice
        } else if (type === 'signed print') {
            return props.signedPrintPrice
        } else {
            return props.originalPrice
        }
    })

    console.log(props.childArray)
    
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
            setTapped(false);
            setBody(false);
        }
    }
    const touchFunc = () => touchSpecial();

    if (props.isParent === true) {
        return (
            <OnImagesLoaded
            onLoaded={() => setLoaded(true)}
        >
            <animated.div style={fade} className="parent-container">
            
            <motion.div onHoverStart={() => setBody(true)} onHoverEnd={hoverFunc} className="image-container">
                
                <motion.div onTap={touchFunc}>
                    {loaded ? <img className="image" src={props.image}  style={{width: props.width}, {height: props.height}} alt="reload this page to load the image"/> : <Spinner animation="border" variant="outline-info" />}
                </motion.div>
             
            {(body && loaded) ? 
                <motion.div animate={{ y: 180 }} className="body-container">
                    <div className="title-area">
                        <h2>{props.title}</h2>
                    </div>
                    <h3 className="date">{props.childArray.length} items created {props.childArray[0].date} to {props.childArray[props.childArray.length-1].date}</h3>
                    <Button id="buy-button" variant="outline-info" size="lg" onClick={showMod}>view</Button>
                </motion.div>

                : 

                <span></span>
            }

            <Modal show={showModal} onHide={hideMod} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title> 
                </Modal.Header>
                        <div className="main-container">
                        {
                            props.childArray.map((card, key) => {
                                return <Child
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
                <Modal.Footer>
                    <Button variant="danger" onClick={hideMod}>
                        cancel
                    </Button>
                </Modal.Footer>
            </Modal>
                
            </motion.div>
        </animated.div>
        </OnImagesLoaded>
        )
    }

    if (props.isChild===true){
        return null;
    }

    return (
        <OnImagesLoaded
            onLoaded={() => setLoaded(true)}
        >
        <animated.div style={fade} className="total-container">
            
            <motion.div onHoverStart={() => setBody(true)} onHoverEnd={hoverFunc} className="image-container">
                
                <motion.div onTap={touchFunc}>
                    {loaded ? <img className="image" src={props.image} alt="reload this page to load the image"/> : <Spinner animation="border" variant="outline-info" />}
                </motion.div>
             
            {(body && loaded) ? 
                <motion.div animate={{ y: 180 }} className="body-container">
                    <div className="title-area">
                        <h1>{props.title}</h1>
                        <DropdownButton id="drop" variant="info" title={type}>
                            {props.hasPrint ? <Dropdown.Item as="button" onClick={() => setType('print')}>print</Dropdown.Item> : <Dropdown.ItemText>print sold out</Dropdown.ItemText>}
                            {props.hasSignedPrint ? <Dropdown.Item as="button" onClick={() => setType('signed print')}>signed print</Dropdown.Item> : <Dropdown.ItemText>signed print s/o</Dropdown.ItemText>}
                            {props.hasOriginal ? <Dropdown.Item active as="button" onClick={() => setType('original')}>original</Dropdown.Item> : <Dropdown.ItemText>original s/o</Dropdown.ItemText>}
                        </DropdownButton>
                    </div>
                    <h3 className="date">{props.date}</h3>

                    {type === 'print' ? <h6 className="description">{props.soldPrint} / ∞ sold</h6> : <span></span>}
                    {type === 'signed print' ? <h6 className="description">{props.soldSignedPrint} / 20 sold</h6> : <span></span>}
                    {type === 'original' ? <h6 className="description">0 / 1 sold</h6> : <span></span>}

                    {type === 'print' ? <Button id="buy-button" variant="outline-info" size="md" onClick={showMod}>buy ${props.printPrice}</Button> : <span></span>}
                    {type === 'signed print' ? <Button id="buy-button" variant="outline-info" size="md" onClick={showMod}>buy ${props.signedPrintPrice}</Button> : <span></span>}
                    {type === 'original' ? <Button id="buy-button" variant="outline-info" size="md" onClick={showMod}>buy ${props.originalPrice}</Button> : <span></span>}
                </motion.div>

                : 

                <span></span>
            }

            <Modal show={showModal} onHide={hideMod}>
                <Modal.Header closeButton>
                    {type === 'print' ? <Modal.Title>{props.title} - ${props.printPrice} - priority mail</Modal.Title> : <span></span>} 
                    {type === 'signed print' ? <Modal.Title>{props.title} - ${props.signedPrintPrice} - priority mail</Modal.Title> : <span></span>} 
                    {type === 'original' ? <Modal.Title>{props.title} - ${props.originalPrice} - priority mail</Modal.Title> : <span></span>} 
                </Modal.Header>
                    <Modal.Body><PayPal price={payPalPrice} title={props.title} type={type} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={hideMod}>
                        cancel
                    </Button>
                </Modal.Footer>
            </Modal>
                
            </motion.div>
        </animated.div>
        </OnImagesLoaded>
    )
}

export default Card;