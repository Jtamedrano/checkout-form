import React from 'react';
import { BillingInfo } from './BillingInfo';
import { CardInfo } from './CardInfo';
import { InfoContext, IBillingDetail, ICard } from './context/cardContext';

interface AppProps {}

const cardInfo: ICard = {
  card_number: undefined,
  cardholder_name: undefined,
  ccv: undefined,
  expiration_month: undefined,
  expiration_year: undefined,
};
const billingInfo: IBillingDetail = {
  address: undefined,
  city: undefined,
  first_name: undefined,
  last_name: undefined,
  state: undefined,
  zip_code: undefined,
};

function App({}: AppProps) {
  return (
    <InfoContext.Provider value={{ cardInfo, billingInfo, isLoading: false }}>
      <div className="App">
        <div>
          <section>
            <h1>Checkout</h1>
            <h2>Credit Card Details</h2>
          </section>
          <section>
            <form>
              <CardInfo />
              <BillingInfo />
              <button type="submit">SUBMIT</button>
            </form>
          </section>
        </div>
      </div>
    </InfoContext.Provider>
  );
}

export default App;
