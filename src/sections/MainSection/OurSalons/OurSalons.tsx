import * as React from 'react';
import { SectionText, Button } from '../../../components';

function OurSalons() {
  return (
    <section className="our-salons">
      <div className="wrapper">
        <SectionText
          paragraph={'Не знаете, что выбрать?'}
          heading={'Посетите наши салоны в Москве'}
        />
        <p className="our-salons__p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque
          egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec
          pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices
          imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.
        </p>
        <Button className="main-button" value="" onClick={() => {}}>
          Наши салоны
        </Button>
      </div>
    </section>
  );
}

export default OurSalons;
