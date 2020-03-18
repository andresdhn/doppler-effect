import React from 'react';
import { shallow } from 'enzyme';
import Simulator from './index.js';
//
describe('Simulator component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Simulator />);
    });

    it('Renders', () => {
        expect(wrapper).not.toBeNull();
    });
});
