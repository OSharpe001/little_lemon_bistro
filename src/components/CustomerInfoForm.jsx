export default function CustomerInfoForm({ info }) {

  return (
    <section className="form customer-info">

        <label htmlFor="first-name">First Name <sup>*</sup></label>
        <input
        type="text"
        id="first-name"
        name="first-name"
        value={info.firstName}
        placeholder="First name"
        onChange={info.handleFirstNameChange}
        onBlur={info.handleFirstNameChange}
        />
        {info.firstNameError?<p className="error-message">{info.firstNameError}</p>:null}

        <label htmlFor="last-name">Last Name <sup>*</sup></label>
        <input
        type="text"
        id="last-name"
        name="last-name"
        placeholder="Last name"
        value={info.lastName}
        onChange={info.handleLastNameChange}
        onBlur={info.handleLastNameChange}
        />
        {info.lastNameError?<p className="error-message">{info.lastNameError}</p>:null}

        <label htmlFor="email">Email <sup>*</sup></label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="little@lemon.com"
        value={info.email}
        onChange={info.handleEmailChange}
        onBlur={info.handleEmailChange}
        />
        {info.emailError?<p className="error-message">{info.emailError}</p>:null}

        <label htmlFor="phone">Phone Number <sup>*</sup></label>
        <input
        type="text"
        id="phone"
        name="phone"
        placeholder="(123) 456-7890"
        value={info.phone}
        onChange={info.handlePhoneChange}
        onBlur={info.handlePhoneChange}
        />
        {info.phoneError?<p className="error-message">{info.phoneError}</p>:null}

    </section>
  );
};
