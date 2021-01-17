import reducer, { pizzaListReducer } from '../../../src/redux/pizza/reducer';
import { PizzaState } from '../../../src/redux/pizza/types';

import { expect } from 'chai';

describe('pizza reducer', () => {
  it('reduces ', () => {
    const initialState: PizzaState = {
      byIds: { [1]: { id: 1, name: 'test' } },
    };
    expect(reducer(initialState, { type: 'test' }).byIds[1].id).to.equal(1);
    expect(reducer(initialState, { type: 'test' }).byIds[1].name).to.equal(
      'test'
    );
  });
});

describe('pizzaListReducer', () => {
  it('reduces json format to pizza state format', () => {
    const jsonPizzaList = [{ id: 1, name: 'test1' }];
    const pizzaWithId = jsonPizzaList.reduce(pizzaListReducer, {});
    expect(pizzaWithId[1].id).to.equal(1);
    expect(pizzaWithId[1].name).to.equal('test1');
  });
});
