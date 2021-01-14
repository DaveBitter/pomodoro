// Libs
import React, { useState } from 'react';

// Utils

// Resources
// @ts-ignore
import CogIcon from '../src/static/img/icons/cog.svg';

// Components
import Modal from '../src/components/Modal/Modal';
import TabAccordion from '../src/components/TabAccordion/TabAccordion';
import Timer from '../src/components/Timer/Timer';

// Interface
interface IProps { }

export type playStateType = 'INITIAL' | 'ACTIVE' | 'PAUSED'
export type tabType = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK'

// Component
const Home = ({ }: IProps) => {
    const [settingsModalIsOpen, setSettingsModalIsOpen] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState<tabType>('POMODORO');
    const [activeTabPlayState, setActiveTabPlayState] = useState<playStateType>('INITIAL');

    const getPlayStateForTab = (tab: tabType): playStateType => activeTab === tab ? activeTabPlayState : 'INITIAL';
    const handleTabSelect = (tab: tabType) => {
        setActiveTab(tab);
        setActiveTabPlayState('INITIAL');
    };
    const handleToggle = () => setActiveTabPlayState(activeTabPlayState === 'ACTIVE' ? 'PAUSED' : 'ACTIVE');

    return <>
        <TabAccordion>
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
        <Modal heading='Settings' isOpen={settingsModalIsOpen} trigger={<Modal.Trigger handleOpen={() => setSettingsModalIsOpen(true)}><CogIcon /></Modal.Trigger>} handleClose={() => setSettingsModalIsOpen(false)}>
            <h2>Coming soon</h2>
        </Modal>
    </>;
};

// Props
Home.defaultProps = {};

export default Home;
