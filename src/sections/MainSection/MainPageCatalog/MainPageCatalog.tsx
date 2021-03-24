import * as React from 'react';

import { Button, SectionText, Figure } from '../../../components';

const menuTile = [
  {
    img: './assets/img/ring.png',
    description: 'Кольца',
  },
  {
    img: './assets/img/sergi.png',
    description: 'серьги',
  },
  {
    img: './assets/img/podveski.png',
    description: 'подвески',
  },
  {
    img: './assets/img/ring.png',
    description: 'запонки',
  },
  {
    img: './assets/img/braslet.png',
    description: 'браслеты',
  },
  {
    img: './assets/img/clocks.png',
    description: 'часы',
  },
];

function MainPageCatalog() {
  return (
    <section className="main-page-catalog">
      <div className="wrapper">
        <SectionText paragraph={'К мероприятиям'} heading={'Настоящая красота здесь!'} />
        {/* <p className="main-page-catalog__p">К мероприятиям</p>
        <h2 className="main-page-catalog__h2">Настоящая красота здесь!</h2> */}
        <div className="main-menu">
          <div className="main-menu__item">
            <Button className="main-menu__item-button " onClick={() => {}}>
              Свадьба
            </Button>
            <div className="main-menu__item-border" />
          </div>
          <div className="main-menu__item">
            <Button className="main-menu__item-button " onClick={() => {}}>
              МУЖУ
            </Button>
            <div className="main-menu__item-border" />
          </div>
          <div className="main-menu__item">
            <Button className="main-menu__item-button " onClick={() => {}}>
              жене
            </Button>
            <div className="main-menu__item-border" />
          </div>
          <div className="main-menu__item">
            <Button className="main-menu__item-button " onClick={() => {}}>
              партнеру
            </Button>
            <div className="main-menu__item-border" />
          </div>
          <div className="main-menu__item">
            <Button className="main-menu__item-button " onClick={() => {}}>
              коллекции
            </Button>
            <div className="main-menu__item-border" />
          </div>
          <div className="main-menu__item">
            <Button className="main-menu__item-button " onClick={() => {}}>
              редкость
            </Button>
            <div className="main-menu__item-border" />
          </div>
        </div>
        <div className="tile">
          {menuTile &&
            menuTile.map((value, index) => (
              <Figure
                className="tile__item"
                img={value.img}
                description={value.description}
                key={index}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

export default MainPageCatalog;
