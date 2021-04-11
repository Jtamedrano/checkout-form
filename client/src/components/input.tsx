import React, { InputHTMLAttributes } from 'react';

interface InputCompProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, ...rest }: InputCompProps) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <input {...rest} />
      </div>
    </>
  );
};

export default Input;
