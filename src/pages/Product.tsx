import * as React from 'react';

import { ProductInformation } from '../sections/';
import { AllProductDescription, SimpleBreadcrumbs } from '../components';

import { fetchJewelryById } from '../redux/reducers/jewelry/action';
import { IJewelryItem } from '../redux/reducers/jewelry/type';

import * as H from 'history';

interface Product {
  id: any;
}

interface Props extends RouteComponentProps<Product> {}
export interface RouteComponentProps<P> {
  match: match<P>;
  location: H.Location;
  history: H.History;
  staticContext?: any;
}

export interface match<P> {
  params: P;
  isExact: boolean;
  path: string;
  url: string;
}

const Product: React.FC<Props> = ({ match }) => {
  const [item, setItem] = React.useState<IJewelryItem | null>(null);
  React.useEffect(() => {
    const dataProduct = fetchJewelryById(match.params.id);
    dataProduct.then((data: IJewelryItem) => setItem(data));
  }, []);
  return (
    <div className="product">
      <div className="wrapper">
        {item && <SimpleBreadcrumbs className="" itemName={item.name} onClick={() => {}} />}
        {item && <ProductInformation item={item} />}

        <AllProductDescription fullProduct={true} />
      </div>
    </div>
  );
};

export default Product;
