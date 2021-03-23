import * as React from 'react';
import { Header } from './components/';
import './styles/_app.scss';

import { MainInformation } from './sections/';
// className="wrapper"
const App = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <MainInformation />
      </div>
    </div>
  );
};

export default App;
