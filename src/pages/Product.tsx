import * as React from 'react';

import { ProductInformation } from '../sections/';
import { AllProductDescription, SimpleBreadcrumbs } from '../components';

function Product() {
  return (
    <div className="product">
      <div className="wrapper">
        <SimpleBreadcrumbs className="" onClick={() => {}} />
        <ProductInformation />

        <AllProductDescription fullProduct={true} />
      </div>
    </div>
  );
}

export default Product;
