import * as React from 'react';
import { Button, FigureProductCard } from '../../../components';
import { fetchJewelry } from '../../../redux/reducers/jewelry/action';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../../redux/reducers';
import { IJewelry } from 'src/redux/reducers/jewelry/type';

const ProductCards: React.FC = React.memo(() => {
  const dispatch: Dispatch<any> = useDispatch();

  const { gender, brand, season, event, type }: any = useSelector(
    (state: AppStateType) => state.filters,
  );
  const jewelry: any = useSelector((state: AppStateType) => state.jewelry.items); //to do any
  console.log('jew', jewelry);

  React.useEffect(() => {
    dispatch(fetchJewelry(gender, brand, season, event, type));
  }, [gender, brand, season, event, type]);
  return (
    <section className="product-cards">
      <div>
        {jewelry &&
          jewelry.map((
            val: any, //to do any
            index: number,
          ) => (
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
              item={val}
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
