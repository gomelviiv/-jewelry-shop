import axios from 'axios';

import * as actionTypes from './actionType';
import { IJewelryItem } from './type';
export const fetchJewelry = (
  gender: number,
  brand: number,
  season: number,
  event: number,
  type: number,
  sortByType: string,
  order: string,
) => (dispatch: any) => {
  dispatch(SetLoaded(false));
  axios
    .get(
      `http://localhost:8081/jewelry?${gender !== null ? `gender.value=${gender}` : ''}&${
        brand !== null ? `brand.value=${brand}` : ''
      }&${season !== null ? `season.value=${season}` : ''}&${
        event !== null ? `event.value=${event}` : ''
      }&${type !== null ? `type.value=${type}` : ''}&_sort=${sortByType}&_order=${order}`,
    )
    .then(({ data }) => {
      dispatch(SetJewelry(data));
    });
};

export const fetchJewelryById = async (id: string) => {
  return await axios.get(`http://localhost:8081/jewelry/${id}`).then((data) => data.data);
};

export const SetJewelry = (payload: string | number = null) => ({
  type: actionTypes.SET_JEWELRY,
  payload,
});
export const SetLoaded = (payload: boolean) => ({
  type: actionTypes.SET_LOADED,
  payload,
});
