import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { findByTestAtrr } from '../utils';

const setUp = (props = {}) => {
    const wrapper = shallow(<App {...props} />);
    return wrapper;
};

describe('App Component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp();
    });

    it('Should render without errors', () => {
        const component = findByTestAtrr(wrapper, 'appComponent');
        expect(component.length).toBe(1);
    });
});
