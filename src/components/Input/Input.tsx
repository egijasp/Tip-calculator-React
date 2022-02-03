import { ChangeEvent, FC } from 'react';

type InputProps = {
  type: string,
  placeholder: string,
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string,
  name: string,
  min: string,
  testId: string,
}

const Input:FC<InputProps> = ({
  type, placeholder, value, onChange, className, name, min, testId,
}) => (
  <input
    className={className}
    data-testid={testId}
    type={type}
    min={min}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name}
  />
);

export default Input;
