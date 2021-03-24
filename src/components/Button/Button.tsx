import * as React from 'react';

interface IButton {
  className: string;
  onClick: Function;
}

const Button: React.FC<IButton> = ({ className, onClick, children }) => {
  return (
    <button className={`main-button ${className}`} onClick={() => onClick}>
      {children}
    </button>
  );
};

export default Button;
