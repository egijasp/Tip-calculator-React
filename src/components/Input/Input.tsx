import './Input.scss';
import { ChangeEvent, FC } from 'react';

type InputProps = {
  type: string,
  placeholder: string,
  value?: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className: string,
  name?: string,
}

const Input:FC<InputProps> = ({
  type, placeholder, value, onChange, className, name,
}) => (
  <input
    className={className}
    type={type}
    min="0"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    name={name}
  />
);

export default Input;
