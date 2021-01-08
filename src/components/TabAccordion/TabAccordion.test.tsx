// Libs
import React from 'react';
import TabAccordion from './TabAccordion';
import { mount } from 'enzyme';

// Test constants

// Component test setup
const setup = (props: any) => {
    const _props = {
        ...props
    };

    const wrapper = mount(<TabAccordion {..._props}></TabAccordion>);

    return {
        _props,
        wrapper
    };
};

// Test scenarios
describe('<TabAccordion />', () => {
    it('should mount', () => {
        const { wrapper } = setup({
        });

        expect(wrapper.childAt(0).exists());
    });
});
