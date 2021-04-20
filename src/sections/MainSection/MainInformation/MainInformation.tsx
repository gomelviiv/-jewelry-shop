import * as React from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../../components/';

function MainInformation() {
  return (
    <section className="main-information">
      <p className="main-information__slogan">Долго, дорого, богато!</p>
      <Link to="/catalog">
        <Button className="main-button" value="" onClick={() => {}}>
          каталог изделий
        </Button>
      </Link>
      <hr className="main-information__hr" />
      <div className="brends">
        <div className="brends__item">
          <img src="./assets/img/brend.png" alt="brend" />
        </div>
        <div className="brends__item">
          <img src="./assets/img/brend.png" alt="brend" />
        </div>
        <div className="brends__item">
          <img src="./assets/img/brend.png" alt="brend" />
        </div>
        <div className="brends__item">
          <img src="./assets/img/brend.png" alt="brend" />
        </div>
        <div className="brends__item">
          <img src="./assets/img/brend.png" alt="brend" />
        </div>
        <div className="brends__item">
          <img src="./assets/img/brend.png" alt="brend" />
        </div>
      </div>
    </section>
  );
}

export default MainInformation;
