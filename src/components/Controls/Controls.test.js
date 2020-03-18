import React from 'react';
import { mount } from 'enzyme';
import Controls from './index.js';
//
describe('Controls component', () => {
    const onVelocityChange = jest.fn();
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <Controls velocity={0} onVelocityChange={onVelocityChange} />
        );
    });

    it('Renders', () => {
        expect(wrapper).not.toBeNull();
    });

    it('Renders a form', () => {
        const formElement = wrapper.find('form');
        expect(formElement.length).toBe(1);
    });

    it('Renders 2 inputs', () => {
        const inputElements = wrapper.find('input');
        expect(inputElements.length).toBe(2);
    });

    it('Changes velocity on input Element', () => {
        const inputElement = wrapper.find('input[type="number"]');
        inputElement.simulate('change', { target: { value: 1 } });
        expect(onVelocityChange).toBeCalledTimes(1);
    });

    it('Changes velocity on range Element', () => {
        const inputElement = wrapper.find('input[type="range"]');
        inputElement.simulate('change', { target: { value: 100 } });
        expect(onVelocityChange).toBeCalled();
    });
});
