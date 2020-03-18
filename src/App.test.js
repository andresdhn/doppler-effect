import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
//
describe('App component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('Shallow Renders', () => {
        expect(wrapper).not.toBeNull();
    });
});
