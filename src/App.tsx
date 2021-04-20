import * as React from 'react';
import { Route } from 'react-router-dom';

import './styles/_app.scss';

import { Header, Footer } from './components';
import { Main, Catalog, Product, Basket } from './pages/';

const App = () => {
  return (
    <div>
      <div className="content">
        <Header />

        <Route exact path={'/'} component={Main} />
        <Route exact path={'/catalog'} component={Catalog} />
        <Route path={'/catalog/:id'} component={Product} />
        <Route exact path={'/basket'} component={Basket} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
