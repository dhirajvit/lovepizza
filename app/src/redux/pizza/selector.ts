import { RootState } from '../store';
export const selectPizzaState = (rootState: RootState) => rootState.pizza;
export const selectPizzas = (rootState: RootState) =>
  selectPizzaState(rootState).byIds;
