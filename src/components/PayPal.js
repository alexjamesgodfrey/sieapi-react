import React, { useRef, useEffect } from 'react';

const PayPal = (props) => {
    console.log(props.price);

    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: "artwork made by sierra apicella",
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
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        })
        .render(paypal.current);
    }, [])

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PayPal;