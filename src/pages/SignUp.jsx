import { useState } from "react";

import {
    CustomerInfoForm,
    CustomerPaymentForm,
    CustomerDeliveryForm
} from "../components";


export default function SignUp({
    setUserName,
    setUserNameError,
    info,
    payment,
    delivery,
    userNameError,
    userName,
    submitForm,
    setLoggedIn
}) {
    const [sameAsBilling, setSameAsBilling] = useState(false);
    const [signUpTerms, setSignUpTerms] = useState(false);

    const clearForm = () => {
        setUserName("");
        setSignUpTerms(false);
        setSameAsBilling(false);

        info.setFirstName("");
        info.setLastName("");
        info.setEmail("");
        info.setPhone("");

        payment.setCardNumber("");
        payment.setCardExpiration("");
        payment.setCardCVV("");
        payment.setPayAddress("");
        payment.setPayCity("");
        payment.setPayState("");
        payment.setPayZipCode("");

        delivery.setAddress("");
        delivery.setAddressError("");
        delivery.setCity("");
        delivery.setCityError("");
        delivery.setState("");
        delivery.setStateError("");
        delivery.setZipCode("");
        delivery.setZipCodeError("");
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        if (e.target.value.length < 2) {
            setUserNameError("Username must have at least 2 characters.");
            return;
        } else if (e.target.value.length >15) {
            setUserNameError("Please limit the Username to 15 characters long.");
        } else {
            setUserNameError("");
        };
    };

    const personalFormDisabled = !!(userNameError) || !!(info.firstNameError) || !!(info.lastNameError) || !!(info.emailError) || !!(info.phoneError);
    const paymentFormDisabled = !!(payment.cardNumberError) || !!(payment.cardExpirationError) || !!(payment.cardCVVError) || !!(payment.addressError) || !!(payment.cityError) || !!(payment.stateError) || !!(payment.zipCodeError);
    const deliveryFormDisabled = (!!(delivery.addressError) || !!(delivery.cityError) || !!(delivery.stateError) || !!(delivery.zipCodeError)) && !sameAsBilling;
    const disabled = personalFormDisabled || paymentFormDisabled || deliveryFormDisabled ;

    const gotRequiredPersonalInfo = !!info.firstName && !!info.lastName && !!info.email && !!info.phone;
    const gotRequiredPaymentInfo = !!payment.cardNumber && !!payment.cardExpiration && !!payment.cardCVV && !!payment.address && !!payment.city && !!payment.state && !!payment.zipCode;
    const gotRequiredDeliveryInfo = (!!delivery.address && !!delivery.city && !!delivery.state && !!delivery.zipCode) || sameAsBilling;

    const gotRequiredInfo = (gotRequiredPersonalInfo && gotRequiredPaymentInfo && gotRequiredDeliveryInfo) && !disabled;

    const setSubmissionErrors = () => {
        if (userName==="") {
            setUserNameError("All fields are required.");
        };
        if (info.firstName === ""){
            info.setFirstNameError("All fields are required.");
        };
        if (info.lastName === ""){
            info.setLastNameError("All fields are required.");
        };
        if (info.email === ""){
            info.setEmailError("All fields are required.");
        };
        if (info.phone === ""){
            info.setPhoneError("All fields are required.");
        };

        if (payment.cardNumber === ""){
            payment.setCardNumberError("All fields are required.");
        };
        if (payment.cardExpiration === ""){
            payment.setCardExpirationError("All fields are required.");
        };
        if (payment.cardCVV === ""){
            payment.setCardCVVError("All fields are required.");
        };
        if (payment.address === ""){
            payment.setPayAddressError("All fields are required.");
        };
        if (payment.city === ""){
            payment.setPayCityError("All fields are required.");
        };
        if (payment.state === ""){
            payment.setPayStateError("All fields are required.");
        };
        if (payment.zipCode === ""){
            payment.setPayZipCodeError("All fields are required.");
        };

        if (delivery.address === "" && !sameAsBilling){
            delivery.setAddressError("All fields are required.");
        };
        if (delivery.city === "" && !sameAsBilling){
            delivery.setCityError("All fields are required.");
        };
        if (delivery.state === "" && !sameAsBilling){
            delivery.setStateError("All fields are required.");
        };
        if (delivery.zipCode === "" && !sameAsBilling){
            delivery.setZipCodeError("All fields are required.");
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!gotRequiredInfo) {
            setSubmissionErrors();
            return;
        }else if (signUpTerms === false){
            alert("Do you agree to our terms of service?");
        } else if (sameAsBilling) {
            submitForm({
                "user-name": userName,
                "first-name":info.firstName,
                "last-name":info.lastName,
                "email":info.email,
                "phone":info.phone,
                "card-number":payment.cardNumber,
                "card-expiration":payment.cardExpiration,
                "card-cvv":payment.cardCVV,
                "card-address":payment.address,
                "card-city":payment.city,
                "card-state":payment.state,
                "card-zip-code":payment.zipCode,
                "delivery-address":payment.address,
                "delivery-city":payment.city,
                "delivery-state":payment.state,
                "delivery-zip-code":payment.zipCode
            });
            setLoggedIn({userName:userName, state:true});
            clearForm();
        } else {
            submitForm({
                "user-name": userName,
                "first-name":info.firstName,
                "last-name":info.lastName,
                "email":info.email,
                "phone":info.phone,
                "card-number":payment.cardNumber,
                "card-expiration":payment.cardExpiration,
                "card-cvv":payment.cardCVV,
                "card-address":payment.address,
                "card-city":payment.city,
                "card-state":payment.state,
                "card-zip-code":payment.zipCode,
                "delivery-address":delivery.address,
                "delivery-city":delivery.city,
                "delivery-state":delivery.state,
                "delivery-zip-code":delivery.zipCode
            });
            setLoggedIn({userName:userName, state:true});
            clearForm();
        };
    };

    const handleTermsChange = () => {
        setSignUpTerms(!signUpTerms);
    };

  return (
    <form
    className="sign-up form"
    onSubmit={handleSubmit}
    >
        <h2>Personal Information</h2>

        <label htmlFor="user-name">Username <sup>*</sup></label>
        <input
        className="user-name"
        type="text"
        id="user-name"
        name="user-name"
        value={userName}
        placeholder="Preferred Name"
        onChange={handleUserNameChange}
        onBlur={handleUserNameChange}
        />
        {userNameError?<p className="error-message">{userNameError}</p>:null}

        <CustomerInfoForm info={info}/>
        <h2>Payment Information</h2>
        <CustomerPaymentForm payment={payment}
                             />
        <h2>Delivery Address</h2>
        <div className="same-as-billing">
            <input
            type="checkbox"
            id="same-as-billing"
            name="same-as-billing"
            value={sameAsBilling}
            onChange={() => setSameAsBilling(!sameAsBilling)}
            />
            <label htmlFor="same-as-billing"> Same As Billing?</label>
        </div>
        {sameAsBilling?null:<CustomerDeliveryForm delivery={delivery}/>}

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
        value="Create Account"
        />

    </form>
  );
};
