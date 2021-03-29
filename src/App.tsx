import * as React from 'react';
import { Route } from 'react-router-dom';

import './styles/_app.scss';

import { Header, Footer } from './components';
import { Main, Catalog, Product } from './pages/';

const App = () => {
  return (
    <div>
      <div className="content">
        <Header />
        <Route exact path={'/'} component={Main} />
        <Route exact path={'/catalog'} component={Catalog} />
        <Route path={'/catalog/:name'} component={Product} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
