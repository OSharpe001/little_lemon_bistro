import CustomerDeliveryForm from "./CustomerDeliveryForm";

export default function CustomerPaymentForm(props) {
  return (
    <section className="form customer-payment">

        <label htmlFor="card-number">Credit/Debit Card Number <sup>*</sup></label>
        <input
        type="text"
        id="card-number"
        name="card-number"
        placeholder="1111 2222 1111 2222"
        value={props.payment.cardNumber}
        onChange={props.payment.handleCardNumberChange}
        onBlur={props.payment.handleCardNumberChange}
        />
        {props.payment.cardNumberError?<p className="error-message">{props.payment.cardNumberError}</p>:null}

        <label htmlFor="card-expiration">Card Expires <sup>*</sup></label>
        <input
        type="text"
        id="card-expiration"
        name="card-expiration"
        placeholder="MM/YY"
        value={props.payment.cardExpiration}
        onChange={props.payment.handleCardExpirationChange}
        onBlur={props.payment.handleCardExpirationChange}
        />
        {props.payment.cardExpirationError?<p className="error-message">{props.payment.cardExpirationError}</p>:null}

        <label htmlFor="card-cvv">CVV <sup>*</sup></label>
        <input
        type="text"
        id="card-cvv"
        name="card-cvv"
        placeholder="123"
        value={props.payment.cardCVV}
        onChange={props.payment.handleCardCVVChange}
        onBlur={props.payment.handleCardCVVChange}
        />
        {props.payment.cardCVVError?<p className="error-message">{props.payment.cardCVVError}</p>:null}

        <CustomerDeliveryForm delivery={props.payment}/>
    </section>
  );
};
