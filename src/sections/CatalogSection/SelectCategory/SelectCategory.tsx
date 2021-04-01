import * as React from 'react';
import { useDispatch } from 'react-redux';

import { FormSelectCategory } from '../../../components';
import {
  SetGender,
  SetEvent,
  SetBrand,
  SetType,
  SetSeason,
} from '../../../redux/reducers/filters/action';
import { Dispatch } from 'redux';

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
    event: (chet: number) => SetBrand(chet),
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
    event: (chet: number) => SetGender(chet),
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
    event: (chet: number) => SetSeason(chet),
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
    event: (chet: number) => SetEvent(chet),
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
    event: (chet: number) => SetType(chet),
  },
];

const SelectCategory: React.FC = React.memo(() => {
  const dispatch: Dispatch<any> = useDispatch();
  const selectDispatch = React.useCallback((index: number, type: string) => {
    dispatch(selectMenu.find((val) => val.type == type).event(index));
  }, []);
  return (
    <section className="select-category">
      {selectMenu &&
        selectMenu.map((val, index) => (
          <FormSelectCategory key={index} selectItem={val} selectDispatch={selectDispatch} />
        ))}
    </section>
  );
});

export default SelectCategory;
