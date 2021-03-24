import * as React from 'react';

import { Mailing } from './Mailing';
import { FooterInformation } from './FooterInformation';

function Footer() {
  return (
    <footer className="footer">
      <Mailing />
      <FooterInformation />
    </footer>
  );
}

export default Footer;
