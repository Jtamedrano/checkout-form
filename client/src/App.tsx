import React, { FormEvent, useState } from 'react';
import { BillingInfo } from './components/BillingInfo';
import { CardInfo } from './components/CardInfo';
import './App.scss';

interface AppProps {}

const initCard = {
  card_number: '',
  cardholder_name: '',
  ccv: '',
  expiration_month: '',
  expiration_year: '',
};
const initBilling = {
  address: '',
  city: '',
  first_name: '',
  last_name: '',
  state: '',
  zip_code: '',
};

function App({}: AppProps) {
  const [cardInfo, setCardInfo] = useState<ICard>(initCard);
  const [billInfo, setBillInfo] = useState<IBilling>(initBilling);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert('Form Submited');
  };

  return (
    <div className="App">
      <div className="FormObjects">
        <form onSubmit={onSubmit} className="FormContainer">
          <section className="headerBar">
            <h1>Checkout</h1>
            <h2>Credit Card Details</h2>
          </section>
          <section className="formWrapper">
            <CardInfo card={cardInfo} setCard={setCardInfo} />
            <section className="headerBar">
              <h2>Billing Details</h2>
            </section>
            <BillingInfo billing={billInfo} setBilling={setBillInfo} />
          </section>
        </form>
        <button onClick={onSubmit}>SUBMIT</button>
      </div>
    </div>
  );
}

export default App;
