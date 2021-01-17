import { AnyAction } from 'redux';

export const ADD_TO_PIZZA = 'ADD_TO_PIZZA';

export interface Pizza {
  id: number;
  name: string;
}
export interface PizzaState {
  byIds: Record<Pizza['id'], Pizza>;
}
export type PizzaActionTypes = AnyAction;
