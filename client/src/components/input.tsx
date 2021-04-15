import React, { InputHTMLAttributes } from 'react';

interface InputCompProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = ({ label, children, ...rest }: InputCompProps) => {
  return (
    <>
      <div className="inputGroup">
        <label>{label}</label>
        {children ? children : <input {...rest} />}
      </div>
    </>
  );
};

export default Input;
