import * as React from 'react';

interface ISectionText {
  paragraph: string;
  heading: string;
}

const SectionText: React.FC<ISectionText> = ({ paragraph, heading }) => {
  return (
    <div className="section-text">
      <p className="section-text__p">{paragraph}</p>
      <h2 className="section-text__h2">{heading}</h2>
    </div>
  );
};

export default SectionText;
