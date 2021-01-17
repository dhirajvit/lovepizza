import pizzas from '../../data/pizzas.json';
import { AnyAction } from 'redux';

import { Pizza, PizzaState } from './types';
interface PizzaListReducer {
  (accumulator: Record<Pizza['id'], Pizza>, currentValue: Pizza): any;
}
export const pizzaListReducer: PizzaListReducer = (
  accumulator,
  currentValue
) => {
  if (!currentValue?.id || !currentValue?.name) return accumulator; // skip if data is not correct
  return {
    ...accumulator,
    [currentValue.id]: { id: currentValue?.id, name: currentValue?.name },
  };
};

const pizzasWithId = pizzas.reduce(pizzaListReducer, {});

const initialState: PizzaState = {
  byIds: pizzasWithId,
};
const reducer = (state: PizzaState = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default reducer;
