import * as React from 'react';

import { HeaderMenu } from './HeaderMenu';

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <HeaderMenu />
      </nav>
    </header>
  );
};

export default Header;
