declare global {
  interface ICard {
    card_number: string;
    cardholder_name: string;
    ccv: string;
    expiration_month: string;
    expiration_year: string;
  }

  interface IBilling {
    address: string;
    city: string;
    first_name: string;
    last_name: string;
    state: string;
    zip_code: string;
  }
}

export {};
