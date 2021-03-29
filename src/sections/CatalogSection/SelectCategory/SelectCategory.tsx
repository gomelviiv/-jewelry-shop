import * as React from 'react';

import { FormSelectCategory } from '../../../components';

const arr = [1, 2, 3, 5, 6];

function SelectCategory() {
  return (
    <section className="select-category">{arr && arr.map((val) => <FormSelectCategory />)}</section>
  );
}

export default SelectCategory;
