import React, { createContext, useReducer } from 'react';
import { InfoReducer } from './InfoReducer';

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

export enum ReducerTypes {
  UpdateInfo,
}

export const initialState = {
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
};

export const InfoContext = createContext({});

export const InfoProvider: React.FC = ({ children }) => {
  const [globalState, dispatch] = useReducer(InfoReducer, initialState);

  return (
    <>
      <InfoContext.Provider value={[globalState, dispatch]}>
        {children}
      </InfoContext.Provider>
    </>
  );
};
