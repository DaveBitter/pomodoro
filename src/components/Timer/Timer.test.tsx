// Libs
import React from 'react';
import Timer from './Timer';
import { mount } from 'enzyme';

// Test constants

// Component test setup
const setup = (props: any) => {
    const _props = {
        duration: 60 * 1000,
        playState: 'INITIAL',
        handleToggle: () => { },
        ...props
    };

    const wrapper = mount(<Timer {..._props} />);

    return {
        _props,
        wrapper
    };
};

// Test scenarios
describe('<Timer />', () => {
    it('should mount', () => {
        const { wrapper } = setup({
        });

        expect(wrapper.childAt(0).exists());
    });
});
