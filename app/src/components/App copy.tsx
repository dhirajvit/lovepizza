import React, { useContext } from "react";
import pizzas from "../data/pizzas.json";
import Pizza from "./pizza";
import AppCSS from "./App.module.css";
import PizzaSVG from "../svg/pizza.svg";
import AppStateProvider, { AppStateContext, CartItem } from "./AppState";
import Cart from "./cart";

const App = () => {
  const state = useContext(AppStateContext);
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <PizzaSVG width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
        <Cart />
        <ul>
          {pizzas.map((pizza) => (
            <Pizza pizza={pizza} />
          ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};
export default App;
