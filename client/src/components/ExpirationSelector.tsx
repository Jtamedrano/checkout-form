import React from 'react';

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

const currentYear = new Date().getFullYear().toLocaleString().slice(2);

const years = Array(10)
  .fill(currentYear)
  .map((el, i) => Number(el) + i);

export const ExpirationSelector = () => {
  return (
    <>
      <label htmlFor="">EXPIRATION</label>
      <select>
        {months.map((m) => (
          <option key={m}>{m}</option>
        ))}
      </select>{' '}
      {'/'}
      <select>
        {years.map((el) => (
          <option>{el}</option>
        ))}
      </select>
    </>
  );
};
