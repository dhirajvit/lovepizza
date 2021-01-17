import { ADD_TO_CART, CartActionTypes, CartState, CartItem } from './types';
const initialState: CartState = {
  selectedItems: [],
};

const reducer = (state: CartState = initialState, action: CartActionTypes) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let found = false;
      let newSelectedItemsList = state.selectedItems.map((item: CartItem) => {
        if (item.id === action.payload.id) {
          found = true;
          return {
            id: item.id,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      if (!found)
        newSelectedItemsList = [
          ...newSelectedItemsList,
          { id: action.payload.id, quantity: 1 },
        ];
      return { ...state, selectedItems: newSelectedItemsList };
    }
    default:
      return state;
  }
};
export default reducer;
