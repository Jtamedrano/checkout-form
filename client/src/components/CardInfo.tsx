import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { ExpirationSelector } from './ExpirationSelector';
import Input from './input';
import Cleave from 'cleave.js/react';
interface CardInfoProps {
  card: ICard;
  setCard: React.Dispatch<React.SetStateAction<ICard>>;
}

export const CardInfo = ({ card, setCard }: CardInfoProps) => {
  const [cardForm, setCardForm] = useState(card.card_number);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Input
        label="CARDHOLDER NAME"
        name="cardholder_name"
        placeholder="Cardholder Name"
        value={card.cardholder_name}
        onChange={handleInputChange}
      />
      <ExpirationSelector card={card} setCard={setCard} />
      <Input label="CARD NUMBER">
        <Cleave
          placeholder="Card Number"
          name="card_number"
          options={{ creditCard: true }}
          onChange={(e) => {
            const event = {
              ...e,
              target: { ...e.target, value: e.target.rawValue },
            };
            handleInputChange(event);
          }}
        />
      </Input>
      <Input
        label="CCV"
        type="number"
        placeholder="CCV"
        maxLength={5}
        name="ccv"
        value={card.ccv}
        onChange={handleInputChange}
      />
    </>
  );
};
