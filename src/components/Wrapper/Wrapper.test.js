import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../../../utils';
import Wrapper from './index.js';

const setUp = (props = {}) => {
    const component = shallow(<Wrapper {...props} />);
    return component;
};

describe('Wrapper component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('Should render without error', () => {
        const component = findByTestAtrr(wrapper, 'wrapperComponent');
        expect(component.length).toBe(1);
    });
});
