import * as React from 'react';
import { Header, Footer } from './components/';
import './styles/_app.scss';

import { Main } from './pages/';
const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
