import { AnyAction } from 'redux';
export const ADD_TO_CART = 'ADD_TO_CART';
// type ADDAction = AnyAction<typeof ADD_TO_CART>;
interface ItemAdded {
  id: number;
}
interface AddToCartAction extends AnyAction {
  payload: ItemAdded;
}

export interface CartItem {
  id: number;
  quantity: number;
}
export interface CartState {
  selectedItems: Array<CartItem>;
}

export type CartActionTypes = AddToCartAction;
