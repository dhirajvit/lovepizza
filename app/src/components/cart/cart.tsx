import React, { useContext } from 'react';
// import { AppStateContext, AppStateValue, CartItem } from "./AppState";
import { useSelector } from 'react-redux';
import { selectedCartItems, selectPizzas } from '../../redux/';
import { CartItem } from '../../redux/cart/index';
import Cartcss from './Cart.module.css';
// import {}
const Cart: React.FC = () => {
  const cartItems = useSelector(selectedCartItems);
  const pizzas = useSelector(selectPizzas);
  return (
    <>
      <div className={Cartcss.header} id="cart-header-test-id">Cart Details</div>
      <div className={Cartcss.container} id="cart-container-test-id">
        <ul>
          {cartItems.map((item: CartItem, index: number) => (
            <li key={index}>
              <h2>{pizzas[item.id].name}</h2>
              <h2>{item.quantity}</h2>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Cart;

/*
<div><div class="_1130ThekG7MzIqcChrD2FV" id="cart-test-id">Cart Details</div><div class="_1WhYRNoOetyREOV0IUaXS4"><ul><li><h2>hellopizza</h2><h2>1</h2></li></ul></div></div>

*/