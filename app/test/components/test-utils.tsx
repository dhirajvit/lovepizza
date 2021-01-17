// test-utils.js
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootState, rootReducer } from '../../src/redux/store';
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
var chai = require('chai');
chai.use(require('chai-dom'));

export const configure = () => {
  const dom = new JSDOM('<!doctype html><html><body></body></html>');
  global.document = dom.window.document;
  global.window = global.document.defaultView;
};
interface Render {
  (
    ui: any,
    obj: {
      initialState: RootState;
      store?: any;
    },
    renderOptions?: any
  ): void;
}
const render: Render = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  }
) => {
  const Wrapper: React.FunctionComponent<{}> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
