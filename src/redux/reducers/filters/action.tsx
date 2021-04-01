import * as actionTypes from './actionTypes';

export const SetGender = (payload: number = null) => ({
  type: actionTypes.SET_GENDER,
  payload,
});

export const SetBrand = (payload: number = null) => ({
  type: actionTypes.SET_BRAND,
  payload,
});

export const SetSeason = (payload: number = null) => ({
  type: actionTypes.SET_SEASON,
  payload,
});

export const SetType = (payload: number = null) => ({
  type: actionTypes.SET_TYPE,
  payload,
});

export const SetEvent = (payload: number = null) => ({
  type: actionTypes.SET_EVENT,
  payload,
});
