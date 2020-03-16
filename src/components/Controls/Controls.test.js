import React from 'react'
import { shallow } from 'enzyme'
import { findByTestAtrr } from '../../../utils'
import Controls from './index.js'

const setUp = (props = {}) => {
    const component = shallow(<Controls {...props} />)
    return component
}

describe('Controls component', () => {
    let wrapper

    beforeEach(() => {
        wrapper = setUp()
    })

    it('Should render without error', () => {
        const component = findByTestAtrr(wrapper, 'controlsComponent')
        expect(component.length).toBe(1)
    })
})
