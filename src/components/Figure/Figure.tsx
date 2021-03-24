import * as React from 'react';

interface IFigure {
  className: string;
  img: string;
  description: string;
}

const Figure: React.FC<IFigure> = ({ className, img, description }) => {
  return (
    <figure className={`figure-style ${className}`}>
      <img src={img} alt="" />
      <figcaption>{description}</figcaption>
    </figure>
  );
};

export default Figure;
