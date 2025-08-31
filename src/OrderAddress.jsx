import { useState } from "react";

import CustomerInfoForm from "./components/CustomerInfoForm";
import CustomerPaymentForm from "./components/CustomerPaymentForm";
import CustomerDeliveryForm from "./components/CustomerDeliveryForm";


export default function OrderAddress(props) {

  const [sameAsBilling, setSameAsBilling] = useState(false);
  const [deliveryTerms, setDeliveryTerms] = useState(false);

  const clearForm = () => {
    setDeliveryTerms(false);
    setSameAsBilling(false);

    props.setOrderUp([]);
    props.info.setFirstName("");
    props.info.setLastName("");
    props.info.setEmail("");
    props.info.setPhone("");

    props.payment.setCardNumber("");
    props.payment.setCardExpiration("");
    props.payment.setCardCVV("");
    props.payment.setPayAddress("");
    props.payment.setPayCity("");
    props.payment.setPayState("");
    props.payment.setPayZipCode("");

    props.delivery.setAddress("");
    props.delivery.setAddressError("");
    props.delivery.setCity("");
    props.delivery.setCityError("");
    props.delivery.setState("");
    props.delivery.setStateError("");
    props.delivery.setZipCode("");
    props.delivery.setZipCodeError("");
  };

  const personalFormDisabled = !!(props.info.firstNameError) || !!(props.info.lastNameError) || !!(props.info.emailError) || !!(props.info.phoneError);
  const paymentFormDisabled = !!(props.payment.cardNumberError) || !!(props.payment.cardExpirationError) || !!(props.payment.cardCVVError) || !!(props.payment.addressError) || !!(props.payment.cityError) || !!(props.payment.stateError) || !!(props.payment.zipCodeError);
  const deliveryFormDisabled = (!!(props.delivery.addressError) || !!(props.delivery.cityError) || !!(props.delivery.stateError) || !!(props.delivery.zipCodeError)) && !sameAsBilling;
  const disabled = personalFormDisabled || paymentFormDisabled || deliveryFormDisabled ;

  const gotRequiredPersonalInfo = !!props.info.firstName && !!props.info.lastName && !!props.info.email && !!props.info.phone;
  const gotRequiredPaymentInfo = !!props.payment.cardNumber && !!props.payment.cardExpiration && !!props.payment.cardCVV && !!props.payment.address && !!props.payment.city && !!props.payment.state && !!props.payment.zipCode;
  const gotRequiredDeliveryInfo = (!!props.delivery.address && !!props.delivery.city && !!props.delivery.state && !!props.delivery.zipCode) || sameAsBilling;

  const gotRequiredInfo = (gotRequiredPersonalInfo && gotRequiredPaymentInfo && gotRequiredDeliveryInfo) && !disabled;

  const setSubmissionErrors = () => {
    if (props.info.firstName === ""){
        props.info.setFirstNameError("All fields are required.");
    };
    if (props.info.lastName === ""){
        props.info.setLastNameError("All fields are required.");
    };
    if (props.info.email === ""){
        props.info.setEmailError("All fields are required.");
    };
    if (props.info.phone === ""){
        props.info.setPhoneError("All fields are required.");
    };

    if (props.payment.cardNumber === ""){
        props.payment.setCardNumberError("All fields are required.");
    };
    if (props.payment.cardExpiration === ""){
        props.payment.setCardExpirationError("All fields are required.");
    };
    if (props.payment.cardCVV === ""){
        props.payment.setCardCVVError("All fields are required.");
    };
    if (props.payment.address === ""){
        props.payment.setPayAddressError("All fields are required.");
    };
    if (props.payment.city === ""){
        props.payment.setPayCityError("All fields are required.");
    };
    if (props.payment.state === ""){
        props.payment.setPayStateError("All fields are required.");
    };
    if (props.payment.zipCode === ""){
        props.payment.setPayZipCodeError("All fields are required.");
    };

    if (props.delivery.address === "" && !sameAsBilling){
        props.delivery.setAddressError("All fields are required.");
    };
    if (props.delivery.city === "" && !sameAsBilling){
        props.delivery.setCityError("All fields are required.");
    };
    if (props.delivery.state === "" && !sameAsBilling){
        props.delivery.setStateError("All fields are required.");
    };
    if (props.delivery.zipCode === "" && !sameAsBilling){
        props.delivery.setZipCodeError("All fields are required.");
    };
 };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!gotRequiredInfo) {
        setSubmissionErrors();
        return;
    }else if (deliveryTerms === false){
        alert("Do you agree to our terms of service?");
    } else if (sameAsBilling) {
        props.submitForm({
            "order":props.orderUp,
            "price":props.total,
            "first-name":props.info.firstName,
            "last-name":props.info.lastName,
            "email":props.info.email,
            "phone":props.info.phone,
            "card-number":props.payment.cardNumber,
            "card-expiration":props.payment.cardExpiration,
            "card-cvv":props.payment.cardCVV,
            "card-address":props.payment.address,
            "card-city":props.payment.city,
            "card-state":props.payment.state,
            "card-zip-code":props.payment.zipCode,
            "delivery-address":props.payment.address,
            "delivery-city":props.payment.city,
            "delivery-state":props.payment.state,
            "delivery-zip-code":props.payment.zipCode
        });
        clearForm();
    } else {
        props.submitForm({
            "order":props.orderUp,
            "price":props.total,
            "first-name":props.info.firstName,
            "last-name":props.info.lastName,
            "email":props.info.email,
            "phone":props.info.phone,
            "card-number":props.payment.cardNumber,
            "card-expiration":props.payment.cardExpiration,
            "card-cvv":props.payment.cardCVV,
            "card-address":props.payment.address,
            "card-city":props.payment.city,
            "card-state":props.payment.state,
            "card-zip-code":props.payment.zipCode,
            "delivery-address":props.delivery.address,
            "delivery-city":props.delivery.city,
            "delivery-state":props.delivery.state,
            "delivery-zip-code":props.delivery.zipCode
        });
        clearForm();
    };
  };

  const handleTermsChange = (e) => {
    setDeliveryTerms(!deliveryTerms);
  };

  return (
    <form className="sign-up form"
    onSubmit={handleSubmit}
    >

        <h2>Personal Information</h2>
        <CustomerInfoForm info={props.info}/>
        <h2>Payment Information</h2>
        <CustomerPaymentForm payment={props.payment}
                             />
        <h2>Delivery Address</h2>
        <div className="same-as-billing">
            <input
            type="checkbox"
            id="same-as-billing"
            name="same-as-billing"
            value={sameAsBilling}
            onChange={(e) => setSameAsBilling(!sameAsBilling)}
            />
            <label htmlFor="same-as-billing"> Same As Billing?</label>
        </div>
        {sameAsBilling?null:<CustomerDeliveryForm delivery={props.delivery}/>}

        <div className="terms">
            <input
            type="checkbox"
            id="terms"
            name="terms"
            onChange={handleTermsChange}
            />
                <label htmlFor="terms">Agree to our <a aria-label="On Click" className="terms-link" href="/terms">Terms of Service</a> <sup>*</sup>
                </label>
        </div>
        <input
        style={disabled?{border: "1px solid #999999", backgroundColor: "#cccccc", color: "#666666", cursor: "not-allowed"}:null}
        aria-label="On Click"
        disabled={disabled}
        className="button"
        type="submit"
        value="Submit Order"
        />
    </form>
  );
};
