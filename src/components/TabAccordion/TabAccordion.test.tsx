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

    interface State {
        activeTab: 'TAB_1' | 'TAB_2' | 'TAB_3';
    }

    class Dave extends React.Component<State> {
        state: State = {
            activeTab: 'TAB_1'
        }

        render() {
            const { activeTab } = this.state;

            return (
                <TabAccordion {..._props}>
                    <TabAccordion.Tabs>
                        <TabAccordion.Tab isActive={activeTab === 'TAB_1'} handleClick={() => this.setState({ activeTab: 'TAB_1' })}>Tab 1</TabAccordion.Tab>
                        <TabAccordion.Tab isActive={activeTab === 'TAB_2'} handleClick={() => this.setState({ activeTab: 'TAB_2' })}>Tab 2</TabAccordion.Tab>
                        <TabAccordion.Tab isActive={activeTab === 'TAB_3'} handleClick={() => this.setState({ activeTab: 'TAB_3' })}>Tab 3</TabAccordion.Tab>
                    </TabAccordion.Tabs>
                    <TabAccordion.Panels>
                        <TabAccordion.Panel isActive={activeTab === 'TAB_1'}>Panel 1</TabAccordion.Panel>
                        <TabAccordion.Panel isActive={activeTab === 'TAB_2'}>Panel 2</TabAccordion.Panel>
                        <TabAccordion.Panel isActive={activeTab === 'TAB_3'}>Panel 3</TabAccordion.Panel>
                    </TabAccordion.Panels>
                </TabAccordion>
            );
        }
    }

    const wrapper = mount(<Dave activeTab='TAB_1' />);

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

    it('should set active to tab and panel for N', () => {
        const { wrapper } = setup({
        });

        wrapper.find('[data-tab]').at(0).simulate('click');
        setTimeout(() => expect(wrapper.find('[data-panel]')?.at(0)?.props()['data-is-active']).toBe(true));

        wrapper.find('[data-tab]').at(1).simulate('click');
        setTimeout(() => expect(wrapper.find('[data-panel]')?.at(1)?.props()['data-is-active']).toBe(true));

        wrapper.find('[data-tab]').at(2).simulate('click');
        setTimeout(() => expect(wrapper.find('[data-panel]')?.at(2)?.props()['data-is-active']).toBe(true));
    });
});
