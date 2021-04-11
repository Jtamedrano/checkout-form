import React, { useContext, useEffect, useState } from 'react';
import Input from './components/input';
import { InfoContext } from './context/cardContext';

export const CardInfo = () => {
  const cardDetail = useContext(InfoContext).cardInfo;
  return (
    <>
      <Input label="CARD NUMBER" />
      <Input label="CARD NUMBER" />
      <Input label="CARD NUMBER" />
    </>
  );
};
