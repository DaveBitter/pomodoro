// Libs
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

// Components
import TabAccordion from './TabAccordion';
import Timer from '../Timer/Timer';

// Story
storiesOf('TabAccordion', module)
    .add('default', () => {
        type tabType = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK'
        type playStateType = 'INITIAL' | 'ACTIVE' | 'PAUSED'

        const [activeTab, setActiveTab] = useState<tabType>('POMODORO');
        const [activeTabPlayState, setActiveTabPlayState] = useState<playStateType>('INITIAL');

        const getPlayStateForTab = (tab: tabType): playStateType => activeTab === tab ? activeTabPlayState : 'INITIAL';
        const handleTabSelect = (tab: tabType) => {
            setActiveTab(tab);
            setActiveTabPlayState('INITIAL');
        };
        const handleToggle = () => setActiveTabPlayState(activeTabPlayState === 'ACTIVE' ? 'PAUSED' : 'ACTIVE');

        return <TabAccordion>
            <TabAccordion.Tabs>
                <TabAccordion.Tab handleClick={() => handleTabSelect('POMODORO')} isActive={activeTab === 'POMODORO'}>pomodoro</TabAccordion.Tab>
                <TabAccordion.Tab handleClick={() => handleTabSelect('SHORT_BREAK')} isActive={activeTab === 'SHORT_BREAK'}>short break</TabAccordion.Tab>
                <TabAccordion.Tab handleClick={() => handleTabSelect('LONG_BREAK')} isActive={activeTab === 'LONG_BREAK'}>long break</TabAccordion.Tab>
            </TabAccordion.Tabs>
            <TabAccordion.Panels>
                <TabAccordion.Panel isActive={activeTab === 'POMODORO'}>
                    <Timer playState={getPlayStateForTab('POMODORO')} duration={25 * 60 * 1000} handleToggle={handleToggle} />
                </TabAccordion.Panel>
                <TabAccordion.Panel isActive={activeTab === 'SHORT_BREAK'}>
                    <Timer playState={getPlayStateForTab('SHORT_BREAK')} duration={5 * 60 * 1000} handleToggle={handleToggle} />
                </TabAccordion.Panel>
                <TabAccordion.Panel isActive={activeTab === 'LONG_BREAK'}>
                    <Timer playState={getPlayStateForTab('LONG_BREAK')} duration={15 * 60 * 1000} handleToggle={handleToggle} />
                </TabAccordion.Panel>
            </TabAccordion.Panels>
        </TabAccordion>
    });
