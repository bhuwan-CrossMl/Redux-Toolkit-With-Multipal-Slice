import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShippingInfo } from "../../actions/cartAction"; // Import the setShippingInfo action

const Payment = ({ history }) => {
  const dispatch = useDispatch();
  const shippingInfo = useSelector((state) => state.shipping); // Use the shipping state

  const [address, setAddress] = useState(shippingInfo.address);   //** Initital Values of State */
  const [city, setCity] = useState(shippingInfo.city);
  const [state, setState] = useState(shippingInfo.state);
  const [country, setCountry] = useState(shippingInfo.country);
  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);
  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

  const shippingSubmit = (e) => {
    e.preventDefault();

    if (phoneNo.length < 10 || phoneNo.length > 10) {
      alert.error("Phone Number should be 10 digits Long");
      return;
    }

    dispatch(
        setShippingInfo({ address, city, state, country, pinCode, phoneNo })
    );

    history.push("/order/confirm");
  };

  return (
    <>
      <MetaData title="Shipping Details" />

      <div className="shippingBox">
        <h2 className="shippingHeading">Shipping Details</h2>

        <form
          className="shippingForm"
          encType="multipart/form-data"
          onSubmit={shippingSubmit}
        >
          <input
            type="text"
            placeholder="Address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <input
            type="text"
            placeholder="City"
            required
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <input
            type="number"
            placeholder="Pin Code"
            required
            value={pinCode}
            onChange={(e) => setPinCode(e.target.value)}
          />

          <input
            type="number"
            placeholder="Phone Number"
            required
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            size="10"
          />

          <div>
            <select
              required
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option value="">Country</option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>

          {country && (
            <div>
              <select
                required
                value={state}
                onChange={(e) => setState(e.target.value)}
              >
                <option value="">State</option>
                {State &&
                  State.getStatesOfCountry(country).map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          <input
            type="submit"
            value="Continue"
            className="shippingBtn"
            disabled={state ? false : true}
          />
        </form>
      </div>
    </>
  );
};

export default Payment;
