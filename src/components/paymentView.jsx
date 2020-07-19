import React, { useState, createRef } from 'react';
import StripeCheckout from "react-stripe-checkout";
import '../styles/paymentViewStyles.css';
import {
  Form
} from 'react-bootstrap';

export default function PaymentView(props) {
  const { busStop = 0, userDonationFunction } = props;
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

    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
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
      <Form className="payment__form-container">
        <Form.Control placeholder="Insert an amount"
          ref={textInput}
          onChange={handleChangeInput}
        />
      </Form>
      <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={selectedData.price * 100}
        name={selectedData.name}
        description={selectedData.description}
        billingAddress
        currency="USD"
      />
    </div>
  );
};