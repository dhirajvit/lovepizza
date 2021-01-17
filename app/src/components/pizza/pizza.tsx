import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PizzaCss from './Pizza.module.css';
import { selectPizzas } from '../../redux/pizza';
import { addToCartAction } from '../../redux/cart';
interface Pizza {
  id: number;
  name: string;
}
const Loader = () => <div className={PizzaCss.loader}>...loading</div>;

const Pizza: React.FC = () => {
  const dispatch = useDispatch();
  const pizzas: Record<Pizza['id'], Pizza> = useSelector(selectPizzas);
  if (Object.keys(pizzas).length === 0) {
    return <Loader />;
  }
  const handleAddPizza: any = (pizzaId: any) => {
    dispatch(addToCartAction(pizzaId));
  };
  return (
    <div className={PizzaCss.container} id="pizza-container-test-id">
      <ul>
        {Object.keys(pizzas).map((id: string, index: number) => {
          const pizza = pizzas[parseInt(id)];
          return (
            <li key={index}>
              <h2>{pizza.name}</h2>
              <button onClick={() => handleAddPizza(id)}>AddMe</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Pizza;
