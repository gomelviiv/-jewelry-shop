import * as React from 'react';

import { SectionText, Figure, Button } from '../../../components';

const articleTile = [
  {
    img: './assets/img/how-clock.png',
    description: 'Как выбрать часы для своей будущей жены',
  },
  {
    img: './assets/img/zaponkiforman.png',
    description: 'Запонки для мужа: 7 ключевых правил покупки аксессуара',
  },
  {
    img: './assets/img/ringforall.png',
    description: 'Как выбрать обручальные кольца молодоженам',
  },
];

function OurArticles() {
  return (
    <section className="our-articles">
      <div className="wrapper">
        <SectionText
          paragraph={'Полезные статьи'}
          heading={'Лучшие советы по подбору дорогих подарков'}
        />
        <div className="blog-articles">
          {articleTile &&
            articleTile.map((value, index) => (
              <Figure
                className={'blog-articles__item'}
                img={value.img}
                description={value.description}
                key={index}
              />
            ))}
        </div>
        <Button className="main-button" value="" onClick={() => {}}>
          читать наш блог
        </Button>
      </div>
    </section>
  );
}

export default OurArticles;
