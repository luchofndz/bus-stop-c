import React, { createRef } from 'react';
import StripeCheckout from "react-stripe-checkout";
import '../styles/paymentViewStyles.css';
import {
  Form
} from 'react-bootstrap';

export default function PaymentView(props) {
  const { busStop = 0, userDonationFunction } = props;
  const textInput = createRef();
  const busStopName = "Bus Stop Donation";
  let price = 700;
  if (textInput.current !== null) {
    price = textInput.current.value;
  }
  const [selectedData] = React.useState({
    name: busStopName,
    price: price,
    description: "Please complete fields"
  });

  async function handleToken(token, addresses) {
    console.log("a:", token, addresses);
    const object =  {
      email: token.email,
      name: "enrique",
      amount: 700,
      busStop: 3
      // name: token.card.name,
      // amount: selectedData.price,
      // busStop: busStop
    };
    userDonationFunction(object);
    // const response = await axios.post(
    //   "https://ry7v05l6on.sse.codesandbox.io/checkout",
    //   { token, product }
    // );
    // const { status } = response.data;
    // console.log("Response:", response.data);
    // if (status === "success") {
    //   toast("Success! Check email for details", { type: "success" });
    // } else {
    //   toast("Something went wrong", { type: "error" });
    // }
  }

  const handleChangeInput = () => {
    console.log("Input value: ", textInput.current.value);
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