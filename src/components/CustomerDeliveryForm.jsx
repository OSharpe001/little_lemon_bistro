export default function CustomerDeliveryForm(props) {

  return (
    <section className="form customer-delivery">

        <label htmlFor="address">Address <sup>*</sup></label>
        <input
        type="text"
        id="address"
        name="address"
        placeholder="123 Smith St."
        value={props.delivery.address}
        onChange={props.delivery.handleAddressChange}
        onBlur={props.delivery.handleAddressChange}
        />
        {props.delivery.addressError?<p className="error-message">{props.delivery.addressError}</p>:null}

        <label htmlFor="city">City <sup>*</sup></label>
        <input
        type="text"
        id="city"
        name="city"
        placeholder="Brooklyn"
        value={props.delivery.city}
        onChange={props.delivery.handleCityChange}
        onBlur={props.delivery.handleCityChange}
        />
        {props.delivery.cityError?<p className="error-message">{props.delivery.cityError}</p>:null}

        <label htmlFor="state">State <sup>*</sup></label>
        <select
        id="state"
        name="state"
        style={props.delivery.state?{color: "#EDEFEE", backgroundColor: "#495E57"}:null}
        value={props.delivery.state}
        onChange={props.delivery.handleStateChange}
        onBlur={props.delivery.handleStateChange}
        >
          <option value="" >State</option>
          <option value="New York" >New York</option>
          <option value="" >Other. . .</option>
        </select>
        {props.delivery.stateError?<p className="error-message">{props.delivery.stateError}</p>:null}

        <label htmlFor="zip-code">Zip/Postal Code <sup>*</sup></label>
        <input
        type="number"
        id="zip-code"
        name="zip-code"
        placeholder="12345"
        value={props.delivery.zipCode}
        onChange={props.delivery.handleZipCodeChange}
        onBlur={props.delivery.handleZipCodeChange}
        />
        {props.delivery.zipCodeError?<p className="error-message">{props.delivery.zipCodeError}</p>:null}

    </section>
  );
};
