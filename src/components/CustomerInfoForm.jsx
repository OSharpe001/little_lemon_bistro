export default function CustomerInfoForm(props) {

  return (
    <section className="form customer-info">

        <label htmlFor="first-name">First Name <sup>*</sup></label>
        <input
        type="text"
        id="first-name"
        name="first-name"
        value={props.info.firstName}
        placeholder="First name"
        onChange={props.info.handleFirstNameChange}
        onBlur={props.info.handleFirstNameChange}
        />
        {props.info.firstNameError?<p className="error-message">{props.info.firstNameError}</p>:null}

        <label htmlFor="last-name">Last Name <sup>*</sup></label>
        <input
        type="text"
        id="last-name"
        name="last-name"
        placeholder="Last name"
        value={props.info.lastName}
        onChange={props.info.handleLastNameChange}
        onBlur={props.info.handleLastNameChange}
        />
        {props.info.lastNameError?<p className="error-message">{props.info.lastNameError}</p>:null}

        <label htmlFor="email">Email <sup>*</sup></label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="little@lemon.com"
        value={props.info.email}
        onChange={props.info.handleEmailChange}
        onBlur={props.info.handleEmailChange}
        />
        {props.info.emailError?<p className="error-message">{props.info.emailError}</p>:null}

        <label htmlFor="phone">Phone Number <sup>*</sup></label>
        <input
        type="text"
        id="phone"
        name="phone"
        placeholder="(123) 456-7890"
        value={props.info.phone}
        onChange={props.info.handlePhoneChange}
        onBlur={props.info.handlePhoneChange}
        />
        {props.info.phoneError?<p className="error-message">{props.info.phoneError}</p>:null}

    </section>
  );
};
