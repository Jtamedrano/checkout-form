import React, { ChangeEvent } from 'react';
import Input from './input';

const states = [
  'AL',
  'AK',
  'AS',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FM',
  'FL',
  'GA',
  'GU',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MH',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'MP',
  'OH',
  'OK',
  'OR',
  'PW',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VI',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

interface BillingInfoProps {
  billing: IBilling;
  setBilling: React.Dispatch<React.SetStateAction<IBilling>>;
}

export const BillingInfo = ({ billing, setBilling }: BillingInfoProps) => {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Input
        label="FIRST NAME"
        value={billing.first_name}
        name="first_name"
        onChange={handleChange}
      />
      <Input
        label="LAST NAME"
        value={billing.last_name}
        name="last_name"
        onChange={handleChange}
      />
      <Input
        label="ADDRESS"
        value={billing.address}
        name="address"
        onChange={handleChange}
      />
      <Input
        label="CITY"
        value={billing.city}
        name="city"
        onChange={handleChange}
      />
      <div className="inputGroup">
        <label>STATE</label>
        <select value={billing.state} name="state" onChange={handleChange}>
          {states.map((s, i) => (
            <option key={`state-${i + 1}`} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <Input
        label="ZIP CODE"
        value={billing.zip_code}
        name="zip_code"
        onChange={handleChange}
      />
    </>
  );
};
