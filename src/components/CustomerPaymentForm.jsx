import CustomerDeliveryForm from "./CustomerDeliveryForm";


export default function CustomerPaymentForm({ payment }) {
  return (
    <section className="form customer-payment">

        <label htmlFor="card-number">Credit/Debit Card Number <sup>*</sup></label>
        <input
        type="text"
        id="card-number"
        name="card-number"
        placeholder="1111 2222 1111 2222"
        value={payment.cardNumber}
        onChange={payment.handleCardNumberChange}
        onBlur={payment.handleCardNumberChange}
        />
        {payment.cardNumberError?<p className="error-message">{payment.cardNumberError}</p>:null}

        <label htmlFor="card-expiration">Card Expires <sup>*</sup></label>
        <input
        type="text"
        id="card-expiration"
        name="card-expiration"
        placeholder="MM/YY"
        value={payment.cardExpiration}
        onChange={payment.handleCardExpirationChange}
        onBlur={payment.handleCardExpirationChange}
        />
        {payment.cardExpirationError?<p className="error-message">{payment.cardExpirationError}</p>:null}

        <label htmlFor="card-cvv">CVV <sup>*</sup></label>
        <input
        type="text"
        id="card-cvv"
        name="card-cvv"
        placeholder="123"
        value={payment.cardCVV}
        onChange={payment.handleCardCVVChange}
        onBlur={payment.handleCardCVVChange}
        />
        {payment.cardCVVError?<p className="error-message">{payment.cardCVVError}</p>:null}

        <CustomerDeliveryForm delivery={payment}/>
    </section>
  );
};
