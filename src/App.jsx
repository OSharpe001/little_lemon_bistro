import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from './api.js';

import {
    HomePage,
    BookingPage,
    AboutUs,
    Menu,
    Order,
    SignIn,
    SignUp,
    SignOut,
    ConfirmedBooking,
    ConfirmedDelivery,
    OrderAddress,
    Terms
} from "./pages";
import { Footer, Header } from "./components";
import {
    validateEmail,
    validatePhone,
    validateAddress,
    validateCity,
    validateZipCode,
    validateCardNumber,
    validateCardExpiration,
    validateCardCVV,
    } from "./utils";


export default function App() {
  const [loggedIn, setLoggedIn] = useState({
                                            state:false,
                                            userName:"",
                                            });

    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState("");
    const [state, setState] = useState("");
    const [stateError, setStateError] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [zipCodeError, setZipCodeError] = useState("");

    const [cardNumber, setCardNumber] = useState("");
    const [cardNumberError, setCardNumberError] = useState("");
    const [cardExpiration, setCardExpiration] = useState("");
    const [cardExpirationError, setCardExpirationError] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [cardCVVError, setCardCVVError] = useState("");
    const [payAddress, setPayAddress] = useState("");
    const [payAddressError, setPayAddressError] = useState("");
    const [payCity, setPayCity] = useState("");
    const [payCityError, setPayCityError] = useState("");
    const [payState, setPayState] = useState("");
    const [payStateError, setPayStateError] = useState("");
    const [payZipCode, setPayZipCode] = useState("");
    const [payZipCodeError, setPayZipCodeError] = useState("");

    const [orderUp, setOrderUp] = useState([]);
    const [total, setTotal] = useState(0);

    const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number);
    const today = [year,month, day].join("-");
    const todaysTimes = fetchAPI(new Date(today));
    const [data, setData] = useState({});
    const initializeTimes= () => todaysTimes;

    const updateTimes = (availableTimes, action) => {
        let newList = "";
        switch (action.type) {
            case ("select"):
                newList = () => fetchAPI(new Date(action.payload));
                return newList;
            default:
                return todaysTimes;
        };
    };

    const [availableTimes, dispatch]= useReducer(updateTimes, initializeTimes);

    const navigate = useNavigate();

    const submitReservationForm = (formData) => {
        const result=submitAPI(formData);
        if (result) {
            setData(formData);
            navigate("/confirmed_booking");
        };
    };

    const submitSignUpForm = (formData) => {
        const result=submitAPI(formData);
        if (result) {
            setData(formData);
            navigate("/");
        };
    };

    const submitOrderUp = (formData, userName, total) => {
        const result=submitAPI(formData);
        if (result && !userName) {
            setTotal(total);
            setData(formData);
            navigate("/delivery_address");
        } else if (result && userName) {
            setTotal(total);
            setData(formData);
            navigate("/confirmed_delivery");
        };
    };
    const submitOrderAddressForm = (formData) => {
        const result=submitAPI(formData);
        if (result) {
            setData(formData);
            navigate("/confirmed_delivery");
        };
    };

    const submitSignInForm = (formData) => {
        const result=submitAPI(formData);
        if (result) {
            setData(formData);
            navigate("/");
        };
    };

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First name must have at least 2 characters.");
            return;
        } else if (e.target.value.length >15) {
            setFirstNameError("Please limit the first name to 15 characters long.");
        } else {
            setFirstNameError("");
        };
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last name must have at least 2 characters.");
            return;
        } else if (e.target.value.length >15) {
            setLastNameError("Please limit the last name to 15 characters long.");
        } else {
            setLastNameError("");
        };
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            setEmailError("Please submit a valid email address.");
            return;
        } else {
            setEmailError("");
        };
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        if (!validatePhone(e.target.value)) {
            setPhoneError("Please submit a valid phone number.");
            return;
        } else {
            setPhoneError("");
        };
    };

    const CustomerInfoProps = {
        firstName:firstName,
        setFirstName:setFirstName,
        handleFirstNameChange:handleFirstNameChange,
        firstNameError:firstNameError,
        setFirstNameError:setFirstNameError,
        lastName:lastName,
        setLastName:setLastName,
        handleLastNameChange:handleLastNameChange,
        lastNameError:lastNameError,
        setLastNameError:setLastNameError,
        email:email,
        setEmail:setEmail,
        handleEmailChange:handleEmailChange,
        emailError:emailError,
        setEmailError:setEmailError,
        phone:phone,
        setPhone:setPhone,
        handlePhoneChange:handlePhoneChange,
        phoneError:phoneError,
        setPhoneError:setPhoneError
    };

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
        if (!validateCardNumber(e.target.value)) {
            setCardNumberError("Please submit a valid credit/debit card number.");
            return;
        } else {
            setCardNumberError("");
        };
    };

    const handleCardExpirationChange = (e) => {
        setCardExpiration(e.target.value);
        if (!validateCardExpiration(e.target.value)) {
            setCardExpirationError("Are you sure that this is the expiration date?");
            return;
        } else {
            setCardExpirationError("");
        };
    };

    const handleCardCVVChange = (e) => {
        setCardCVV(e.target.value);
        if (!validateCardCVV(e.target.value)) {
            setCardCVVError("Are you sure that this is the CVV number?");
            return;
        } else {
            setCardCVVError("");
        };
    };

    const handlePayAddressChange = (e) => {
        setPayAddress(e.target.value);
        if (!validateAddress(e.target.value)) {
            setPayAddressError("Please submit a valid address.");
            return;
        } else {
            setPayAddressError("");
        };
    };

    const handlePayCityChange = (e) => {
        setPayCity(e.target.value);
        if (!validateCity(e.target.value)) {
            setPayCityError("Please submit a valid City.");
            return;
        } else {
            setPayCityError("");
        };
    };

    const handlePayStateChange = (e) => {
        setPayState(e.target.value);
        if (e.target.value==="New York") {
            setPayStateError("");
        } else {
            setPayStateError("I'm sorry. We currently only service NYC.");
            return;
        };
    };

    const handlePayZipCodeChange = (e) => {
        setPayZipCode(e.target.value);
        if (!validateZipCode(e.target.value)) {
            setPayZipCodeError("Please submit a valid Zip Code.");
            return;
        } else {
            setPayZipCodeError("");
        };
    };

    const CustomerPaymentProps = {
        cardNumber: cardNumber,
        setCardNumber:setCardNumber,
        handleCardNumberChange:handleCardNumberChange,
        cardNumberError:cardNumberError,
        setCardNumberError:setCardNumberError,
        cardExpiration:cardExpiration,
        setCardExpiration:setCardExpiration,
        handleCardExpirationChange:handleCardExpirationChange,
        cardExpirationError:cardExpirationError,
        setCardExpirationError:setCardExpirationError,
        cardCVV:cardCVV,
        setCardCVV:setCardCVV,
        handleCardCVVChange:handleCardCVVChange,
        cardCVVError:cardCVVError,
        setCardCVVError:setCardCVVError,
        address:payAddress,
        setPayAddress:setPayAddress,
        handleAddressChange:handlePayAddressChange,
        addressError:payAddressError,
        setPayAddressError:setPayAddressError,
        city:payCity,
        setPayCity:setPayCity,
        handleCityChange:handlePayCityChange,
        cityError:payCityError,
        setPayCityError:setPayCityError,
        state:payState,
        setPayState:setPayState,
        handleStateChange:handlePayStateChange,
        stateError:payStateError,
        setPayStateError:setPayStateError,
        zipCode:payZipCode,
        setPayZipCode:setPayZipCode,
        handleZipCodeChange:handlePayZipCodeChange,
        zipCodeError:payZipCodeError,
        setPayZipCodeError:setPayZipCodeError
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
        if (!validateAddress(e.target.value)) {
            setAddressError("Please submit a valid address.");
            return;
        } else {
            setAddressError("");
        };
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
        if (!validateCity(e.target.value)) {
            setCityError("Please submit a valid City.");
            return;
        } else {
            setCityError("");
        };
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
        if (e.target.value==="New York") {
            setStateError("");
        } else {
            setStateError("I'm sorry. We currently only service NYC.");
            return;
        };
    };

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
        if (!validateZipCode(e.target.value)) {
            setZipCodeError("Please submit a valid Zip Code.");
            return;
        } else {
            setZipCodeError("");
        };
    };

    const CustomerDeliveryProps = {
        address:address,
        setAddress:setAddress,
        handleAddressChange:handleAddressChange,
        addressError:addressError,
        setAddressError:setAddressError,
        city:city,
        setCity:setCity,
        handleCityChange:handleCityChange,
        cityError:cityError,
        setCityError:setCityError,
        state:state,
        setState:setState,
        handleStateChange:handleStateChange,
        stateError:stateError,
        setStateError:setStateError,
        zipCode:zipCode,
        setZipCode:setZipCode,
        handleZipCodeChange:handleZipCodeChange,
        zipCodeError:zipCodeError,
        setZipCodeError:setZipCodeError
    };

    const setOrder = (newOrder) => {
        setOrderUp([...orderUp, newOrder]);
        orderUp.forEach((item, index)=>{
            if (item[0]===newOrder[0]) {
                let newList = [...orderUp];
                newList[index] = newOrder;
                setOrderUp([...newList]);
            };
        });
    };
  return (
    <>
            <Header
                loggedIn={loggedIn}
                setLoggedIn={setLoggedIn}
                navigate={navigate}
                />
             {loggedIn.state?<h2 className="welcome-banner">Welcome, {loggedIn.userName}!</h2>:null}
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/booking" element={<BookingPage
                                                    info={CustomerInfoProps}
                                                    availableTimes={availableTimes}
                                                    dispatch={dispatch}
                                                    submitForm={submitReservationForm}
                                                    userName={loggedIn.userName}
                                                    />}/>
                <Route path="/about_us" element={<AboutUs />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/sign_in" element={<SignIn
                                                    submitForm={submitSignInForm}
                                                    userName={userName}
                                                    setUserName={setUserName}
                                                    userNameError={userNameError}
                                                    setUserNameError={setUserNameError}
                                                    setLoggedIn={setLoggedIn}
                                                    />}/>

                <Route path="/confirmed_booking" element={<ConfirmedBooking
                                                                        data={data}
                                                                        userName={loggedIn.userName}/>}/>
                <Route path="/order" element={<Order
                                                userName={loggedIn.userName}
                                                setOrder={setOrder}
                                                setOrderUp={setOrderUp}
                                                orderUp={orderUp}
                                                submitForm={submitOrderUp}
                                                submitMemberForm={submitOrderAddressForm}
                                                />}/>
                <Route path="/confirmed_delivery" element={<ConfirmedDelivery
                                                                        data={data}
                                                                        userName={loggedIn.userName}/>}/>
                <Route path="/delivery_address" element={<OrderAddress
                                                                        userName={loggedIn.userName}
                                                                        orderUp={orderUp}
                                                                        setOrderUp={setOrderUp}
                                                                        total={total}
                                                                        info={CustomerInfoProps}
                                                                        payment={CustomerPaymentProps}
                                                                        delivery={CustomerDeliveryProps}
                                                                        submitForm={submitOrderAddressForm}/>}/>
                <Route path="/terms" element={<Terms />}/>
                <Route path="/sign_up" element={<SignUp
                                                    info={CustomerInfoProps}
                                                    payment={CustomerPaymentProps}
                                                    delivery={CustomerDeliveryProps}
                                                    submitForm={submitSignUpForm}
                                                    userName={userName}
                                                    setUserName={setUserName}
                                                    userNameError={userNameError}
                                                    setUserNameError={setUserNameError}
                                                    setLoggedIn={setLoggedIn}
                                                    />}/>
                <Route path="/sign_out" element={<SignOut
                                                    setLoggedIn={setLoggedIn}
                                                    navigate={navigate}
                                                    />}/>

            </Routes>
            <Footer />
        </>
  )
}
