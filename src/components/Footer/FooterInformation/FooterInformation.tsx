import * as React from 'react';

function FooterInformation() {
  return (
    <section className="section-footer-information">
      <div className="wrapper">
        <div className="footer-information">
          <div className="footer-information__item">
            <h2 className="footer-information__item-header">Полезные ссылки</h2>
            <hr />
            <div>Полезные ссылки</div>
            <div>Оплата </div>
            <div>Акции</div>
            <div>Политика конфиденциальности</div>
          </div>
          <div className="footer-information__item">
            <h2 className="footer-information__item-header">оплата</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec,
              pellentesque.
            </p>
            <div>
              <img src="./assets/img/visa.png" alt="" />
              <img src="./assets/img/mastercard.png" alt="" />
            </div>
          </div>
          <div className="footer-information__item">
            <h2 className="footer-information__item-header">контакты</h2>
            <hr />
            <div>
              <img src="./assets/img/phone.png" alt="" />
              <p>8 (812) 234-56-55</p>
            </div>
            <div>
              <img src="./assets/img/phone.png" alt="" />
              <p>8 (812) 234-56-55</p>
            </div>
            <div>
              <img src="./assets/img/mail.png" alt="" />
              <p>ojjo@ojjo.ru</p>
            </div>
          </div>
          <div className="footer-information__item">
            <h2 className="footer-information__item-header">социальные сети</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec,
              pellentesque.
            </p>
            <div>
              <img src="./assets/img/youtube.png" alt="" />
              <img src="./assets/img/vk.png" alt="" />
              <img src="./assets/img/facebook.png" alt="" />
              <img src="./assets/img/telegram.png" alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-information-secondary">
          <div>(c) 2020 OJJO jewelry</div>
          <div>Договор публичной офферты</div>
          <div>Контрагентам</div>
          <div>
            <a href="#">Сделал ванек(@gomelviiv)</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooterInformation;
