// Libs
import React from 'react';
import Modal from './Modal';
import { mount } from 'enzyme';

// Test constants

// Component test setup
const setup = (props: any) => {
    const _props = {
        isOpen: false,
        trigger: <button>Trigger</button>,
        handleClose: () => { },
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

    it('should call handleClose when close button pressed', () => {
        const stub = jest.fn();
        const { wrapper } = setup({
            handleClose: stub
        });

        const trigger = wrapper.find('[data-modal-close]');
        trigger?.simulate('click');

        expect(stub).toHaveBeenCalled();
    });
});
