import { combineReducers, createStore } from "redux";
import { cartReducer } from ".";
import { pizzaReducer } from ".";

export const rootReducer = combineReducers({
  cart: cartReducer,
  pizza: pizzaReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);

export default store;
