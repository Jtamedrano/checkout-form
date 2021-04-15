import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ExpirationSelector } from './ExpirationSelector';
import Input from './input';

interface CardInfoProps {
  card: ICard;
  setCard: React.Dispatch<React.SetStateAction<ICard>>;
}

export const CardInfo = ({ card, setCard }: CardInfoProps) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  console.log(card);
  return (
    <>
      <Input
        label="CARDHOLDER NAME"
        name="cardholder_name"
        value={card.cardholder_name}
        onChange={handleInputChange}
      />
      <Input
        label="CARD NUMBER"
        type="number"
        minLength={16}
        name="card_number"
        value={card.card_number}
        onChange={handleInputChange}
      />
      <ExpirationSelector card={card} setCard={setCard} />
      <Input
        label="CCV"
        type="number"
        maxLength={5}
        name="ccv"
        value={card.ccv}
        onChange={handleInputChange}
      />
    </>
  );
};
