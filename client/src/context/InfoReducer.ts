import type React from 'react';
import { initialState } from './cardContext';

interface IAction {
  type: string;
  payload?: any;
}

export const InfoReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case 'updateInfo':
      return { ...action.payload, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
};
