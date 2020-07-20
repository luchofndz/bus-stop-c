import React, { useState, createRef } from 'react';
import StripeCheckout from "react-stripe-checkout";
import '../styles/paymentViewStyles.css';
import Toast from './toast/toastView'
import {
  Form
} from 'react-bootstrap';

export default function PaymentView(props) {
  const { busStop = 0, userDonationFunction, donationSuccess, donationError = '' } = props;
  const textInput = createRef();
  const [selectedData, setSelectedData] = useState({
    name: "Bus Stop Donation",
    price: 700,
    description: "Please complete fields"
  });

  async function handleToken(token, addresses) {
    console.log("a:", token, addresses);
    const object =  {
      email: token.email,
      amount: selectedData.price,
      busStop: 3,
      name: token.card.name,
      busStop: busStop
    };
    console.log("obje", object);
    userDonationFunction(object);
  }

  const handleChangeInput = () => {
    console.log("Input value: ", textInput.current.value);
    setSelectedData({
      ...selectedData,
      price: textInput.current.value
    });
    console.log("handleChange:", selectedData);
  }

  return (
    <div>
      <div className="payment___amount-and-pay-container">
        <Form className="payment__form-container">
          <Form.Control placeholder="Insert an amount"
            ref={textInput}
            onChange={handleChangeInput}
          />
        </Form>
        <StripeCheckout
          className="mr-auto"
          stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
          token={handleToken}
          amount={selectedData.price * 100}
          name={selectedData.name}
          description={selectedData.description}
          billingAddress
          currency="USD"
        />
      </div>
      <Toast 
        title={donationSuccess && "Donation successful"} 
        message={donationSuccess && "Your payment was proessed successfully"}
        showByPros={donationSuccess}
      />
      <Toast 
        title={donationError !== null && "something went wrong"} 
        message={donationError !== null && donationError}
        showByPros={donationError !== null ? true : false}
      />
    </div>
  );
};