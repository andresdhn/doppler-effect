import React from 'react';
import { mount } from 'enzyme';
import Star from './index.js';
//
describe('Star component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Star velocity={0} />);
    });

    it('Renders', () => {
        expect(wrapper).not.toBeNull();
    });
});
