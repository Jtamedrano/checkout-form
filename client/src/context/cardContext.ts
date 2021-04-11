import React, { createContext } from 'react';

export interface ICard {
  cardholder_name?: string;
  card_number?: number;
  expiration_month?: number;
  expiration_year?: number;
  ccv?: number;
}
export interface IBillingDetail {
  first_name?: string;
  last_name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: number;
}

export const InfoContext = createContext<{
  cardInfo: ICard;
  billingInfo: IBillingDetail;
  isLoading: boolean;
}>({
  cardInfo: {
    cardholder_name: undefined,
    card_number: undefined,
    expiration_month: undefined,
    expiration_year: undefined,
    ccv: undefined,
  },
  billingInfo: {
    first_name: undefined,
    last_name: undefined,
    address: undefined,
    city: undefined,
    state: undefined,
    zip_code: undefined,
  },
  isLoading: false,
});
