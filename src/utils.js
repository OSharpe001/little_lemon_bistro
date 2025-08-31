export const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export const validatePhone = (phone) => {
    return String(phone)
      .match(
        /^(\([0-9]{3}\) | [0-9]{3}-)[0-9]{3}-[0-9]{4}$/
      ) ||
      String(phone)
      .match(
        /[0-9]{10}/
      );
  };

  export const validateAddress = (address) => {
    return String(address)
      .match(
        /^[0-9]{1,8} [A-Za-z]* [A-Za-z]*\.$/
      );
  };

  export const validateCity = (city) => {
    return String(city)
      .match(
        /^[A-Z]{1}[a-z.]*$/
      );
  };

  export const validateZipCode = (zipCode) => {
    return String(zipCode)
      .match(
        /^[0-9]{5}$/
      );
  };

  export const validateCardNumber = (cardNumber) => {
    return String(cardNumber)
      .match(
        /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/
      ) ||
      String(cardNumber)
      .match(
        /[0-9]{16}/
      );
  };

  export const validateCardExpiration = (cardExpiration) => {
    return String(cardExpiration)
      .match(
        /^[0-9]{2}\/[0-9]{2}$/
      );
  };

  export const validateCardCVV = (cardCVV) => {
    return String(cardCVV)
      .match(
        /^[0-9]{3}$/
      );
  };