import * as React from 'react';
import { Link } from 'react-router-dom';

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
        <ul className="main-menu">
          <li className="main-menu__item">
            <Link to="/catalog">
              <Button className="main-menu__item-button " onClick={() => {}}>
                Свадьба
              </Button>
            </Link>
          </li>
          <li className="main-menu__item">
            <Link to="/catalog">
              <Button className="main-menu__item-button " onClick={() => {}}>
                МУЖУ
              </Button>
            </Link>
          </li>
          <li className="main-menu__item">
            <Link to="/catalog">
              <Button className="main-menu__item-button " onClick={() => {}}>
                жене
              </Button>
            </Link>
          </li>
          <li className="main-menu__item">
            <Link to="/catalog">
              <Button className="main-menu__item-button " onClick={() => {}}>
                партнеру
              </Button>
            </Link>
          </li>
          <li className="main-menu__item">
            <Link to="/catalog">
              <Button className="main-menu__item-button " onClick={() => {}}>
                коллекции
              </Button>
            </Link>
          </li>
          <li className="main-menu__item">
            <Link to="/catalog">
              <Button className="main-menu__item-button " onClick={() => {}}>
                редкость
              </Button>
            </Link>
          </li>
        </ul>
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
