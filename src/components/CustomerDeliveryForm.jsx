export default function CustomerDeliveryForm( { delivery }) {

  return (
    <section className="form customer-delivery">

        <label htmlFor="address">Address <sup>*</sup></label>
        <input
        type="text"
        id="address"
        name="address"
        placeholder="123 Smith St."
        value={delivery.address}
        onChange={delivery.handleAddressChange}
        onBlur={delivery.handleAddressChange}
        />
        {delivery.addressError?<p className="error-message">{delivery.addressError}</p>:null}

        <label htmlFor="city">City <sup>*</sup></label>
        <input
        type="text"
        id="city"
        name="city"
        placeholder="Brooklyn"
        value={delivery.city}
        onChange={delivery.handleCityChange}
        onBlur={delivery.handleCityChange}
        />
        {delivery.cityError?<p className="error-message">{delivery.cityError}</p>:null}

        <label htmlFor="state">State <sup>*</sup></label>
        <select
        id="state"
        name="state"
        style={delivery.state?{color: "#EDEFEE", backgroundColor: "#495E57"}:null}
        value={delivery.state}
        onChange={delivery.handleStateChange}
        onBlur={delivery.handleStateChange}
        >
          <option value="" >State</option>
          <option value="New York" >New York</option>
          <option value="" >Other. . .</option>
        </select>
        {delivery.stateError?<p className="error-message">{delivery.stateError}</p>:null}

        <label htmlFor="zip-code">Zip/Postal Code <sup>*</sup></label>
        <input
        type="number"
        id="zip-code"
        name="zip-code"
        placeholder="12345"
        value={delivery.zipCode}
        onChange={delivery.handleZipCodeChange}
        onBlur={delivery.handleZipCodeChange}
        />
        {delivery.zipCodeError?<p className="error-message">{delivery.zipCodeError}</p>:null}

    </section>
  );
};
