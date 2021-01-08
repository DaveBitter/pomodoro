// Libs
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

// Components
import TabAccordion from './TabAccordion';

// Story
storiesOf('General', module)
    .add('TabAccordion', () => {
        type tabs = 'TIMER' | 'SHORT_BREAK' | 'LONG_BREAK'

        const [activeTab, setActiveTab] = useState<tabs>('TIMER');

        return <TabAccordion>
            <TabAccordion.Tabs>
                <TabAccordion.Tab handleClick={() => setActiveTab('TIMER')} isActive={activeTab === 'TIMER'}>timer</TabAccordion.Tab>
                <TabAccordion.Tab handleClick={() => setActiveTab('SHORT_BREAK')} isActive={activeTab === 'SHORT_BREAK'}>short break</TabAccordion.Tab>
                <TabAccordion.Tab handleClick={() => setActiveTab('LONG_BREAK')} isActive={activeTab === 'LONG_BREAK'}>long break</TabAccordion.Tab>
            </TabAccordion.Tabs>
            <TabAccordion.Panels>
                <TabAccordion.Panel isActive={activeTab === 'TIMER'}>TIMER CONTENT</TabAccordion.Panel>
                <TabAccordion.Panel isActive={activeTab === 'SHORT_BREAK'}>SHORT_BREAK CONTENT</TabAccordion.Panel>
                <TabAccordion.Panel isActive={activeTab === 'LONG_BREAK'}>LONG_BREAK CONTENT</TabAccordion.Panel>
            </TabAccordion.Panels>
        </TabAccordion>
    });
