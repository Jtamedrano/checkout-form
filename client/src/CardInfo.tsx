import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ExpirationSelector } from './components/ExpirationSelector';
import Input from './components/input';
import { InfoContext, ReducerTypes } from './context/cardContext';

export const CardInfo = (props: any) => {
  const handleInputChange = (e: ChangeEvent) => {};

  return (
    <>
      <Input label="CARDHOLDER NAME" />
      <Input label="CARD NUMBER" type="number" minLength={16} />
      <ExpirationSelector />
      <Input label="CCV" type="number" maxLength={5} />
    </>
  );
};
