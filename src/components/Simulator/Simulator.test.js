import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../utils';
import Simulator from './index.js';

const setUp = (props = {}) => {
    const component = shallow(<Simulator {...props} />);
    return component;
};

describe('Simulator component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setUp();
    });

    it('Should render without error', () => {
        const component = findByTestAtrr(wrapper, 'simulatorComponent');
        expect(component.length).toBe(1);
    });
});
