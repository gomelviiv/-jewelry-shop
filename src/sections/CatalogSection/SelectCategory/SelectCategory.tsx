import * as React from 'react';
import { useDispatch } from 'react-redux';

import { FormSelectCategory, FormSelectSortBy } from '../../../components';
import { SetGender, SetEvent, SetBrand, SetType, SetSeason } from '../../../redux/filters/action';
import { Dispatch } from 'redux';
import { SetSortBy } from '../../../redux/sortBy/action';

const selectMenu = [
  {
    name: 'Бренд',
    menuItems: [
      {
        value: 0,
        name: 'Dolce & Gabanna',
      },
      {
        value: 1,
        name: 'Gabanna & Dolce',
      },
    ],
    type: 'brand',
    event: (num: number) => SetBrand(num),
  },
  {
    name: 'Для кого',
    menuItems: [
      {
        value: 0,
        name: 'Жены',
      },
      {
        value: 1,
        name: 'Мужа',
      },
      {
        value: 2,
        name: 'Парнера',
      },
    ],
    type: 'gender',
    event: (num: number) => SetGender(num),
  },
  {
    name: 'Сезон',
    menuItems: [
      {
        value: 0,
        name: 'Зима',
      },
      {
        value: 1,
        name: 'Лето',
      },
    ],
    type: 'season',
    event: (num: number) => SetSeason(num),
  },
  {
    name: 'Событие',
    menuItems: [
      {
        value: 0,
        name: 'Свадьба',
      },
      {
        value: 1,
        name: 'День рождения',
      },
    ],
    type: 'event',
    event: (num: number) => SetEvent(num),
  },
  {
    name: 'Тип',
    menuItems: [
      {
        value: 0,
        name: 'Кольцо',
      },
      {
        value: 1,
        name: 'Подвеска',
      },
    ],
    type: 'type',
    event: (num: number) => SetType(num),
  },
];

const sortItems = {
  name: 'Сортировка',
  sortBy: [
    {
      sortByType: 'price',
      order: 'desc',
      name: 'цене',
    },
    {
      sortByType: 'name',
      order: 'asc',
      name: 'алфавиту',
    },
  ],
};

const SelectCategory: React.FC = React.memo(() => {
  const dispatch: Dispatch<any> = useDispatch();

  const selectDispatchFilter = React.useCallback((index: number, type: string) => {
    dispatch(selectMenu.find((val) => val.type == type).event(index));
  }, []);

  const selectDispatchSortBy = React.useCallback((propsName: string) => {
    let { sortByType, order, name } = sortItems.sortBy.filter((val) => val.name == propsName)[0];

    dispatch(SetSortBy({ sortByType, order, name }));
  }, []);

  return (
    <section className="select-category">
      {selectMenu &&
        selectMenu.map((val, index) => (
          <FormSelectCategory
            key={index}
            selectItem={val}
            selectDispatchFilter={selectDispatchFilter}
          />
        ))}
      {sortItems && (
        <FormSelectSortBy sortItems={sortItems} selectDispatchSortBy={selectDispatchSortBy} />
      )}
    </section>
  );
});

export default SelectCategory;
