import * as React from 'react';

import {
  MainInformation,
  MainPageCatalog,
  OurArticles,
  OurSalons,
  OurSocialNetworks,
} from '../sections';

function Main() {
  return (
    <div>
      <MainInformation />
      <MainPageCatalog />
      <OurSalons />
      <OurArticles />
      <OurSocialNetworks />
    </div>
  );
}

export default Main;
