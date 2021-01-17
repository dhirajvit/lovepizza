import * as actions from '../../../src/redux/cart/action';
import { ADD_TO_CART } from '../../../src/redux/cart/types';

import { expect } from 'chai';

describe('cart actions', () => {
  it('create an action to add a cart', () => {
    expect(actions.addToCartAction(100).type).to.equal(ADD_TO_CART);
    expect(actions.addToCartAction(100).payload.id).to.equal(100);
  });
});
