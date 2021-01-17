import App from '../../../src/components/main-app/MainApp';
import { expect } from 'chai';
import React from 'react';
import { render, configure } from '../test-utils';
import { RootState } from '../../../src/redux/store';

describe('mainApp', function () {
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
    expect(document.querySelector('div div')).to.have.id(
      'mainapp-container-test-id'
    );
    expect(document.querySelector('#mainapp-container-test-id header')).to
      .exist;
    expect(document.querySelector('#mainapp-container-test-id header svg')).to
      .exist;
    expect(
      document.querySelector('#mainapp-container-test-id header div')
    ).to.have.text('Delicious Pizza');

    expect(document.querySelectorAll('#cart-header-test-id')).to.exist;
    expect(document.querySelectorAll('#pizza-container-test-id')).to.exist;
  });
});
