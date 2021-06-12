import Card from './Card.js';
import Footer from './Footer.js';
import '../styles/Deck.scss';
import React from 'react';

const Deck = (props) => {

    return (
        <div>
            <h1><span className="font-color">aspen</span> by sierra apicella | 01-21 - present</h1>
            <div className="d-flex main-container">
            <div className="d-flex flex-wrap justify-content-center" style={{ margin: '0px auto' }}>
                <div className="small-columns">
                    {
                    props.arr.map((card, key) => {
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
                            sold={card.sold}
                            />
                        }
                    )
                    }
                </div>
                <div className="big-columns">
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
                            sold={card.sold}
                            />
                        }
                    )
                    }
                </div>
                <div className="big-columns">
                    {
                    props.arr.slice(Math.ceil(props.arr.length / 4), Math.ceil(props.arr.length / 2)).map((card, key) => {
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
                            sold={card.sold}
                            />
                        }
                    )
                    }
                </div>
                <div className="big-columns">
                    {
                    props.arr.slice(Math.ceil(props.arr.length / 2), props.arr.length * 0.75 + 1).map((card, key) => {
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
                            sold={card.sold}
                            />
                        }
                    )
                    }
                </div>
                <div className="big-columns">
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
                            sold={card.sold}
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