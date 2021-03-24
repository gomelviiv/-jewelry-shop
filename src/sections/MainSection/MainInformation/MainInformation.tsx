import * as React from 'react';

import { Button } from '../../../components/';
function MainInformation() {
  return (
    <section className="main-information">
      <p className="main-information__slogan">Долго, дорого, богато!</p>
      <Button className="main-button" onClick={() => {}}>
        каталог изделий
      </Button>
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
