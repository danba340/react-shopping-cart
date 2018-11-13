import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should set state.showModal to true on clicking CartButton', () => {
  const app = shallow(<App />);
  const cartButton = app.find('CartButton');
  
  expect(app.state().showModal).toEqual(false); 

  cartButton.simulate('click');
  expect(app.state().showModal).toEqual(true);

});