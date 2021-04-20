import * as React from 'react';

interface IButton {
  className: string;
  onClick(): void;
  value?: any;
  name?: any;
}

const Button: React.FC<IButton> = ({ className, value, name, onClick, children }) => {
  return (
    <button className={`main-button ${className}`} name={name} value={value} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
