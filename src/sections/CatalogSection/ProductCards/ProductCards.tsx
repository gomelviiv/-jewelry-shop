import * as React from 'react';
import { Button, FigureProductCard } from '../../../components';
import { fetchJewelry } from '../../../redux/reducers/jewelry/action';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../../redux/reducers';
import { ISortBy } from '../../../redux/reducers/sortBy/type';
import { IJewelryItem } from '../../../redux/reducers/jewelry/type';
import { IFilters } from '../../../redux/reducers/filters/type';

const ProductCards: React.FC = React.memo(() => {
  const dispatch: Dispatch<any> = useDispatch();

  const { gender, brand, season, event, type }: IFilters = useSelector(
    (state: AppStateType) => state.filters,
  );
  const jewelry: Array<IJewelryItem> = useSelector((state: AppStateType) => state.jewelry.items);
  const { sortByType, order }: ISortBy = useSelector((state: AppStateType) => state.sortBy);

  React.useEffect(() => {
    dispatch(fetchJewelry(gender, brand, season, event, type, sortByType, order));
  }, [gender, brand, season, event, type, sortByType, order]);
  return (
    <section className="product-cards">
      <div>
        {jewelry &&
          jewelry.map((val: IJewelryItem, index: number) => (
            <FigureProductCard
              id={val.id}
              img={val.img}
              name={val.name}
              brand={val.brand}
              price={val.price}
              gender={val.gender}
              season={val.season}
              type={val.type}
              event={val.event}
              className=""
              key={`${index} + ${val.id}`}
            />
          ))}
      </div>
      <Button className="product-cards__button" value="" onClick={() => {}}>
        покажите еще
      </Button>
    </section>
  );
});

export default ProductCards;
