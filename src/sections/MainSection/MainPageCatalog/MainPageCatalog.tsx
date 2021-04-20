import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button, SectionText, Figure } from '../../../components';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { SetGender, SetEvent, SetType, SetSeason } from '../../../redux/filters/action';

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

const menuButton = [
  {
    text: 'свадьба',
    event: () => SetEvent(1),
  },
  {
    text: 'мужу',
    event: () => SetGender(1),
  },
  {
    text: 'жене',
    event: () => SetGender(0),
  },
  {
    text: 'партнеру',
    event: () => SetGender(2),
  },
  {
    text: 'кольцо',
    event: () => SetType(0),
  },
  {
    text: 'лето',
    event: () => SetSeason(1),
  },
];

const MainPageCatalog: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <section className="main-page-catalog">
      <div className="wrapper">
        <SectionText paragraph={'К мероприятиям'} heading={'Настоящая красота здесь!'} />
        <ul className="main-menu">
          {menuButton &&
            menuButton.map((value, index) => (
              <li className="main-menu__item" key={index}>
                <Link to="catalog">
                  <Button
                    className="main-menu__item-button "
                    onClick={() => dispatch(value.event())}>
                    {value.text}
                  </Button>
                </Link>
              </li>
            ))}
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
};

export default MainPageCatalog;
