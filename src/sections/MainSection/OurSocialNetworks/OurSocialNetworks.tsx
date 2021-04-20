import * as React from 'react';

import { SectionText } from '../../../components';

function OurSocialNetworks() {
  return (
    <section className="our-social-networks">
      <div className="wrapper">
        <SectionText paragraph={'#ojjo_jewerly'} heading={'Мы в социальных сетях'} />
        <div className="social-networks">
          <div className="social-networks__top">
            <div>
              <img src="./assets/img/video-ring.png" alt="" />
            </div>
            <div>
              <img src="./assets/img/s-n1.png" alt="" />
              <img src="./assets/img/s-n2.png" alt="" />
            </div>
          </div>
          <div className="social-networks__bottom">
            <div>
              <img src="./assets/img/s-n3.png" alt="" />
              <img src="./assets/img/s-n4.png" alt="" />
            </div>
            <div>
              <img src="./assets/img/video-ring2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSocialNetworks;
