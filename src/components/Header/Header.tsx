import * as React from 'react';

import { HeaderMenu } from './HeaderMenu';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <HeaderMenu />
        {/* <ul className="header-menu">
          <li className="header-menu__item ">
            <a href="#">Контрагентам</a>
          </li>
          <li className="header-menu__item ">
            <a href="#">Дизайнерам</a>
          </li>
          <li className="header-menu__item ">
            <a href="#">Вакансии</a>
          </li>
          <li className="header-menu__item header-menu__item-logo ">
            <a href="#">
              <img src="./assets/img/OJJO.png" alt="" />
            </a>
          </li>
          <li className="header-menu__item header-menu__item-search ">
            <a href="#">
              <img src="./assets/img/icons/search-icon.png" alt="" />
              <input id="search-header" placeholder="Поиск..." />
            </a>
          </li>
          <li className="header-menu__item ">
            <a href="#">Вход/Регистрация</a>
          </li>
          <li className="header-menu__item header-menu__item-icons ">
            <a href="#">
              <img src="./assets/img/icons/user-icon.png" alt="" />
              <img src="./assets/img/icons/like-icon.png" alt="" />
            </a>
          </li>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
