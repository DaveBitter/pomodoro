// Libs
import React, { useState } from 'react';

// Utils

// Resources

// Components
import TabAccordion from '../src/components/TabAccordion/TabAccordion';

// Interface
interface IProps { }

type tabs = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK'

// Component
const Home = ({ }: IProps) => {
    const [activeTab, setActiveTab] = useState<tabs>('POMODORO');

    return <>
        <h1 className='h3'>pomodoro</h1>
        <TabAccordion>
            <TabAccordion.Tabs>
                <TabAccordion.Tab handleClick={() => setActiveTab('POMODORO')} isActive={activeTab === 'POMODORO'}>pomodoro</TabAccordion.Tab>
                <TabAccordion.Tab handleClick={() => setActiveTab('SHORT_BREAK')} isActive={activeTab === 'SHORT_BREAK'}>short break</TabAccordion.Tab>
                <TabAccordion.Tab handleClick={() => setActiveTab('LONG_BREAK')} isActive={activeTab === 'LONG_BREAK'}>long break</TabAccordion.Tab>
            </TabAccordion.Tabs>
            <TabAccordion.Panels>
                <TabAccordion.Panel isActive={activeTab === 'POMODORO'}>POMODORO CONTENT</TabAccordion.Panel>
                <TabAccordion.Panel isActive={activeTab === 'SHORT_BREAK'}>SHORT_BREAK CONTENT</TabAccordion.Panel>
                <TabAccordion.Panel isActive={activeTab === 'LONG_BREAK'}>LONG_BREAK CONTENT</TabAccordion.Panel>
            </TabAccordion.Panels>
        </TabAccordion>
    </>;
};

// Props
Home.defaultProps = {};

export default Home;
