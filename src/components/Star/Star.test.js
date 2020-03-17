import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../utils';
import Star from './index.js';

const setUp = (props = {}) => {
    const component = shallow(<Star {...props} />);
    return component;
};

describe('Star component', () => {
    describe('Checking PropTypes', () => {
        const expectedProps = {
            velocity: 0,
        };

        const propsErr = checkProps(Star, expectedProps);
        expect(propsErr).toBeUndefined();
    });

    describe('Have Props', () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setUp();
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'starComponent');
            expect(component.length).toBe(1);
        });
    });
});
