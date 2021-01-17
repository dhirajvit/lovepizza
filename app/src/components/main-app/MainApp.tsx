import React, { useContext } from 'react';
// import pizzas from "../../data/pizzas.json";
import Pizza from '../pizza';
import AppCSS from './MainApp.module.css';
import PizzaSVG from '../../svg/pizza.svg';
import Cart from '../cart';

const MainApp: React.FC = () => {
  return (
    <div className={AppCSS.container} id="mainapp-container-test-id">
      <header>
        <PizzaSVG width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
      </header>
      <Pizza />
      <Cart />
    </div>
  );
};
export default MainApp;
