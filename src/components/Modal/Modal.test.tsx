// Libs
import React from 'react';
import Modal from './Modal';
import { mount } from 'enzyme';

// Test constants

// Component test setup
const setup = (props: any) => {
    const _props = {
        ...props
    };

    const wrapper = mount(<Modal {..._props} />);

    return {
        _props,
        wrapper
    };
};

// Test scenarios
describe('<Modal />', () => {
    it('should mount', () => {
        const { wrapper } = setup({
        });

        expect(wrapper.childAt(0).exists());
    });
});
