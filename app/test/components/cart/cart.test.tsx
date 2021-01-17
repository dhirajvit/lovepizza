import App from '../../../src/components/cart';
import { expect } from 'chai';
import React from 'react';
import { render, configure } from '../test-utils';
import { RootState } from '../../../src/redux/store';

describe('cart', function () {
  beforeEach(() => {
    configure();
  });
  it('render and tests', function () {
    const testState: RootState = {
      cart: { selectedItems: [{ id: 1, quantity: 1 }] },
      pizza: { byIds: { [1]: { id: 1, name: 'hellopizza' } } },
    };
    render(<App />, {
      initialState: testState,
    });
    expect(document.querySelector('div div')).to.have.id('cart-header-test-id');
    expect(document.querySelector('#cart-container-test-id ul')).to.exist;
    expect(
      document.querySelector('#cart-container-test-id ul li')
    ).to.have.length(2);
    expect(
      document.querySelector('#cart-container-test-id ul li h2')
    ).to.contain.text('hellopizza');
    expect(
      document.querySelector('#cart-container-test-id ul li').lastChild
    ).to.contain.text('1');
  });
});
