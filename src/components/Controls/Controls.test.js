import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr, checkProps } from '../../utils';
import Controls from './index.js';

const setUp = (props = {}) => {
    const component = shallow(<Controls {...props} />);
    return component;
};

describe('Controls component', () => {
    describe('Checking PropTypes', () => {
        const expectedProps = {
            velocity: 0,
        };

        const propsErr = checkProps(Controls, expectedProps);
        expect(propsErr).toBeUndefined();
    });

    describe('Have Props', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                velocity: 0,
            };

            wrapper = setUp(props);
        });

        it('Should render without error', () => {
            const component = findByTestAtrr(wrapper, 'controlsComponent');
            expect(component.length).toBe(1);
        });

        it('Should render an Velocity Field', () => {
            const component = findByTestAtrr(wrapper, 'velocityInput');
            expect(component.length).toBe(1);
        });

        it('Should render an Velocity Range', () => {
            const component = findByTestAtrr(wrapper, 'velocityRange');
            expect(component.length).toBe(1);
        });
    });
});
