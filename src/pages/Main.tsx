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
    <>
      <MainInformation />
      <MainPageCatalog />
      <OurSalons />
      <OurArticles />
      <OurSocialNetworks />
    </>
  );
}

export default Main;
