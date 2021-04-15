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
  };

  return (
    <div className="App">
      <div className="FormContainer">
        <section>
          <h1>Checkout</h1>
          <h2>Credit Card Details</h2>
        </section>
        <section>
          <form onSubmit={onSubmit}>
            <CardInfo card={cardInfo} setCard={setCardInfo} />
            <BillingInfo billing={billInfo} setBilling={setBillInfo} />
            <button type="submit">SUBMIT</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default App;
