import { CartActionTypes } from './types';

export const addToCartAction = (id: number): CartActionTypes => ({
  type: 'ADD_TO_CART',
  payload: { id },
});
