import React, { ChangeEvent } from 'react';

/**
 * Sets the months for the 'MM' Selector
 */
const months = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
];

/**
 * Sets the current year for years fill input current year will set the start of the exp for yy
 */
const currentYear = new Date().getFullYear().toLocaleString().slice(2);

const years = Array(10)
  .fill(currentYear)
  .map((el, i) => Number(el) + i);

interface ExpSelProps {
  card: ICard;
  setCard: React.Dispatch<React.SetStateAction<ICard>>;
}

export const ExpirationSelector = ({ card, setCard }: ExpSelProps) => {
  const handleOnSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setCard({ ...card, [e.target.name]: e.target.value });
  };
  return (
    <>
      <label htmlFor="">EXPIRATION</label>
      <select
        name="expiration_month"
        value={card.expiration_month}
        onChange={handleOnSelect}
      >
        <option>MM</option>
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>{' '}
      {'/'}
      <select
        name="expiration_year"
        value={card.expiration_year}
        onChange={handleOnSelect}
      >
        <option>YY</option>
        {years.map((el) => (
          <option value={el} key={`yy-${el}`}>
            {el}
          </option>
        ))}
      </select>
    </>
  );
};
