export default function ConfirmedDelivery(props) {

    const confirmedCustomer = props.data;
    const confirmedOrder = props.data.order;

    const name = confirmedCustomer["first-name"]+" "+confirmedCustomer["last-name"];
    const email = confirmedCustomer.email;

    const deliveryAddress = confirmedCustomer["delivery-address"];
    const deliveryCity = confirmedCustomer["delivery-city"];
    const deliveryState = confirmedCustomer["delivery-state"];

    return (
        <section className="confirmed-booking">
            <h1>Congrats!</h1>
            <p>Your order is being prepared, now!</p>
            <section>
                {props.userName?
                    <>
                        <p>Your order of:</p>
                        {confirmedOrder.map((item) =>item[1]>0? <p key={item[0]}><span className="confirmed-res-info">{item[1]}- {item[0]}</span></p>:null)}
                        <p>will be delivered to the address on file.</p>
                    </>
                    :
                    <>
                        <p><span className="confirmed-res-info">{name}</span></p>
                        <p>Your order of:</p>
                        {confirmedOrder.map((item) => <p key={item[0]}><span className="confirmed-res-info">{item[1]}- {item[0]}</span></p>)}
                        <p>
                            will be delivered to:
                            <br/>
                            <span className="confirmed-res-info">
                                {deliveryAddress}
                            </span>
                            <br/>
                            <span className="confirmed-res-info">
                                {deliveryCity}, {deliveryState}
                            </span>
                        </p>
                        <p>Your total is: <span className="confirmed-res-info">${props.data.price}</span></p>
                    </>
                }
            </section>
            {email?<p>We've sent an email to <span className="confirmed-res-info">{email} </span>with your order confirmation.</p>:null}
        </section>
    );
};
