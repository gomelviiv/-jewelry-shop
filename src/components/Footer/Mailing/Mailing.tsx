import * as React from 'react';

import { Button, SectionText } from '../../../components';

function Mailing() {
  return (
    <section className="mailing">
      <div className="wrapper">
        <SectionText
          paragraph={'Полезные советы и персональный предложения'}
          heading={'Эксклюзивная рассылка'}
        />
        <div className="little-form">
          <div className="little-form__left">
            <div>
              <img src="./assets/img/little-play.png" alt="" />
              <p>Личный менеджер</p>
            </div>
            <div>
              <img src="./assets/img/little-play.png" alt="" />
              <p>Доставка и оформление</p>
            </div>
            <div>
              <img src="./assets/img/little-play.png" alt="" />
              <p>Индивидуальный дизайн</p>
            </div>
          </div>
          <div className="little-form__right">
            <div className="big-border">
              <div className="middle-border">
                <input placeholder="ВАШ E-MAIl" type="text" />
                <Button className="main-button" value="" onClick={() => {}}>
                  отправить
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mailing;
