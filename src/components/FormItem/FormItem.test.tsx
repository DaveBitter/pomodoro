// Libs
import React from 'react';
import FormItem from './FormItem';
import { mount } from 'enzyme';

// Test constants

// Component test setup
const setup = (props: any) => {
    const _props = {
        ...props
    };

    const wrapper = mount(<FormItem {..._props}>
        <FormItem.Label>Form item</FormItem.Label>
    </FormItem>);

    return {
        _props,
        wrapper
    };
};

// Test scenarios
describe('<FormItem />', () => {
    it('should mount', () => {
        const { wrapper } = setup({
        });

        expect(wrapper.childAt(0).exists());
    });
});
