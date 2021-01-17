import App from '../../../src/components/pizza';
import { expect } from 'chai';
import React from 'react';
import { render, configure } from '../test-utils';
import { RootState } from '../../../src/redux/store';

describe('pizza', function () {
  beforeEach(() => {
    configure();
  });
  it('render and tests', function () {
    const testState: RootState = {
      cart: { selectedItems: [] },
      pizza: { byIds: { [1]: { id: 1, name: 'hellopizza' } } },
    };
    render(<App />, {
      initialState: testState,
    });
    // console.log(document.body.innerHTML);
    expect(document.querySelector('div div')).to.have.id(
      'pizza-container-test-id'
    );
    expect(document.querySelector('#pizza-container-test-id ul')).to.exist;
    expect(
      document.querySelector('#pizza-container-test-id ul li')
    ).to.have.length(2);
    expect(
      document.querySelector('#pizza-container-test-id ul li h2')
    ).to.contain.text('hellopizza');
    expect(
      document.querySelector('#pizza-container-test-id ul li').lastChild
    ).to.contain.text('AddMe');
  });
  it('render loader', function () {
    const testState: RootState = {
      cart: { selectedItems: [] },
      pizza: { byIds: {} },
    };
    render(<App />, {
      initialState: testState,
    });
    expect(document.querySelector('div div')).to.contain.text('...loading');
  });
});
