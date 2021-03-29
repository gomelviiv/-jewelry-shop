import * as React from 'react';
import { AllProductDescription } from '../components';
import { ProductCards, SelectCategory } from '../sections';

function Catalog() {
  return (
    <div className="catalog">
      <div className="wrapper">
        <SelectCategory />
        <ProductCards />
        <AllProductDescription fullProduct={false} />
      </div>
    </div>
  );
}

export default Catalog;
