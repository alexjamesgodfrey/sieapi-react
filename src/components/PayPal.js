import React, { useState, useRef, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const PayPal = (props) => {
    console.log(props.price);

    const [approved, setApproved] = useState(false);
    const [inProgess, setInProgess] = useState(false);


    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: `${props.title} ${props.type}`,
                            amount: {
                                currency_code: "USD",
                                value: props.price
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                setApproved(true);
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        })
        .render(paypal.current);
    }, [])

    if (approved) {
        return (
            <h3>success! you will receive an email with tracking information within 24 hours :)</h3>
        )
    }

    if (inProgess) {
        return (
            <Spinner animation="border" variant="info"></Spinner>
        )
    }
    return (
        <div>
            <div ref={paypal} onClick={() => setInProgess(true)}></div>
        </div>
    )
}

export default PayPal;