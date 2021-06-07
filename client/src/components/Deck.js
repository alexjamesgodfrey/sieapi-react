import { useState, useEffect} from 'react'
import Card from './Card.js';
import Footer from './Footer.js';
import '../styles/Deck.scss';
import React from 'react';

const Deck = (props) => {
    const [arr1, setarr1] = useState([props.arr.slice(0, props.arr.length / 4)])
    const [arr2, setarr2] = useState([props.arr.slice(props.arr.length / 4, props.arr.length / 2)])
    const [arr3, setarr3] = useState([props.arr.slice(props.arr.length / 2, props.arr.length * 0.75)])
    const [arr4, setarr4] = useState([props.arr.slice(props.arr.length * 0.75)])
    const arrayReorganizer = (length) => {
        if (length % 4 === 0) {
            return null
        }
        if (props.arr.length % 4 === 2) {
            // setarr1(props.arr.slice(0, props.arr.length / 4 + 1))
        }
    }

    console.log(arrayReorganizer(props.arr.length))

    useEffect(() => {
        console.log(arr1)
        console.log(arr2)
        console.log(arr3)
        console.log(arr4)
        arrayReorganizer(props.arr.length)
    }, [])

    return (
        <div>
            <h1><span className="font-color">aspen</span> by sierra apicella | 01-21 - present</h1>
            <div className="d-flex main-container">
            <div className="d-flex flex-wrap justify-content-center" style={{ margin: '0px auto'}}>
                <div>
                    {
                    props.arr.slice(0, Math.ceil(props.arr.length / 4)).map((card, key) => {
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
                <div>
                    {
                    props.arr.slice(Math.ceil(props.arr.length / 4), Math.ceil(props.arr.length / 2) + 1).map((card, key) => {
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
                <div>
                    {
                    props.arr.slice(Math.ceil(props.arr.length / 2) + 1, props.arr.length * 0.75 + 1).map((card, key) => {
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
                <div>
                    {
                    props.arr.slice(props.arr.length * 0.75 + 1).map((card, key) => {
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
            </div>
        </div>
        <Footer />
        </div>
    )

}

export default Deck;