import { RootState } from '../store';
export const selectCartState = (rootState: RootState) => rootState.cart;
export const selectedCartItems = (rootState: RootState) =>
  selectCartState(rootState).selectedItems
