// Libs
import React, { FormEvent, useEffect, useReducer, useState } from 'react';

// Utils

// Resources
// @ts-ignore
import CogIcon from '../src/static/img/icons/cog.svg';

// Components
import Modal from '../src/components/Modal/Modal';
import TabAccordion from '../src/components/TabAccordion/TabAccordion';
import Timer from '../src/components/Timer/Timer';
import FormItem from '../src/components/FormItem/FormItem';

// Interface
interface IProps { }

export type playStateType = 'INITIAL' | 'ACTIVE' | 'PAUSED'
export type tabType = 'POMODORO' | 'SHORT_BREAK' | 'LONG_BREAK'

// Component
const Home = ({ }: IProps) => {
    const [settings, setSettings] = useReducer((state: any, action: any) => ({ ...state, ...action }), {
        pomodoro: 25,
        shortBreak: 5,
        longBreak: 5,
        font: 'Public Sans',
        color: 'orange'
    })
    const [settingsModalIsOpen, setSettingsModalIsOpen] = useState<boolean>(false)
    const [activeTab, setActiveTab] = useState<tabType>('POMODORO');
    const [activeTabPlayState, setActiveTabPlayState] = useState<playStateType>('INITIAL');

    const getPlayStateForTab = (tab: tabType): playStateType => activeTab === tab ? activeTabPlayState : 'INITIAL';
    const handleTabSelect = (tab: tabType) => {
        setActiveTab(tab);
        setActiveTabPlayState('INITIAL');
    };
    const handleToggle = () => setActiveTabPlayState(activeTabPlayState === 'ACTIVE' ? 'PAUSED' : 'ACTIVE');
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLElement;
        const [pomodoroInput, shortBreakInput, longBreakInput] = form.querySelectorAll('input[type="number"]') as unknown as HTMLInputElement[];
        const selectedFont = form.querySelector('input[name="font"]:checked') as unknown as HTMLInputElement;
        const selectedColor = form.querySelector('input[name="color"]:checked') as unknown as HTMLInputElement;

        setSettings({
            pomodoro: Number(pomodoroInput.value),
            shortBreak: Number(shortBreakInput.value),
            longBreak: Number(longBreakInput.value),
            font: selectedFont?.value || 'Public Sans',
            color: selectedColor?.value || 'orange'
        })
        setSettingsModalIsOpen(false)
    }

    useEffect(() => {
        const root = document.documentElement;

        root.style.setProperty('--color-primary', `var(--color-${settings.color})`);
        root.style.setProperty('--font-primary', settings.font);
    }, [settings])

    console.log(settings);

    return <>
        <TabAccordion>
            <TabAccordion.Tabs>
                <TabAccordion.Tab handleClick={() => handleTabSelect('POMODORO')} isActive={activeTab === 'POMODORO'}>pomodoro</TabAccordion.Tab>
                <TabAccordion.Tab handleClick={() => handleTabSelect('SHORT_BREAK')} isActive={activeTab === 'SHORT_BREAK'}>short break</TabAccordion.Tab>
                <TabAccordion.Tab handleClick={() => handleTabSelect('LONG_BREAK')} isActive={activeTab === 'LONG_BREAK'}>long break</TabAccordion.Tab>
            </TabAccordion.Tabs>
            <TabAccordion.Panels>
                <TabAccordion.Panel isActive={activeTab === 'POMODORO'}>
                    <Timer playState={getPlayStateForTab('POMODORO')} duration={settings.pomodoro * 60 * 1000} handleToggle={handleToggle} />
                </TabAccordion.Panel>
                <TabAccordion.Panel isActive={activeTab === 'SHORT_BREAK'}>
                    <Timer playState={getPlayStateForTab('SHORT_BREAK')} duration={settings.shortBreak * 60 * 1000} handleToggle={handleToggle} />
                </TabAccordion.Panel>
                <TabAccordion.Panel isActive={activeTab === 'LONG_BREAK'}>
                    <Timer playState={getPlayStateForTab('LONG_BREAK')} duration={settings.longBreak * 60 * 1000} handleToggle={handleToggle} />
                </TabAccordion.Panel>
            </TabAccordion.Panels>
        </TabAccordion>
        <Modal heading='Settings' isOpen={settingsModalIsOpen} trigger={<Modal.Trigger handleOpen={() => setSettingsModalIsOpen(true)}><CogIcon /></Modal.Trigger>} handleClose={() => setSettingsModalIsOpen(false)}>
            <form onSubmit={handleSubmit}>
                <FormItem>
                    <FormItem.Title>time (minutes)</FormItem.Title>
                    <FormItem.Group>
                        <FormItem.GroupItem type='number'>
                            <FormItem.Label>pomodoro</FormItem.Label>
                            <FormItem.Input defaultValue={settings.pomodoro} min='5' step='5' type='number' name='POMODORO' />
                        </FormItem.GroupItem>
                        <FormItem.GroupItem type='number'>
                            <FormItem.Label>short break</FormItem.Label>
                            <FormItem.Input defaultValue={settings.shortBreak} min='5' step='5' type='number' name='SHORT_BREAK' />
                        </FormItem.GroupItem>
                        <FormItem.GroupItem type='number'>
                            <FormItem.Label>long break</FormItem.Label>
                            <FormItem.Input defaultValue={settings.longBreak} min='5' step='5' type='number' name='LONG_BREAK' />
                        </FormItem.GroupItem>
                    </FormItem.Group>
                </FormItem>
                <FormItem>
                    <FormItem.Title>font</FormItem.Title>
                    <FormItem.Group>
                        <FormItem.GroupItem type='font'>
                            <FormItem.Input defaultValue='Public Sans' type='radio' name='font' defaultChecked={settings.font === 'Public Sans'} />
                            <FormItem.Label>Aa</FormItem.Label>
                        </FormItem.GroupItem>
                        <FormItem.GroupItem type='font'>
                            <FormItem.Input defaultValue='Tahoma' type='radio' name='font' defaultChecked={settings.font === 'Tahoma'} />
                            <FormItem.Label>Aa</FormItem.Label>
                        </FormItem.GroupItem>
                        <FormItem.GroupItem type='font'>
                            <FormItem.Input defaultValue='Georgia' type='radio' name='font' defaultChecked={settings.font === 'Georgia'} />
                            <FormItem.Label>Aa</FormItem.Label>
                        </FormItem.GroupItem>
                    </FormItem.Group>
                </FormItem>
                <FormItem>
                    <FormItem.Title>color</FormItem.Title>
                    <FormItem.Group>
                        <FormItem.GroupItem type='color'>
                            <FormItem.Input defaultValue='orange' type='radio' name='color' defaultChecked={settings.color === 'orange'} />
                            <FormItem.Label>Orange</FormItem.Label>
                        </FormItem.GroupItem>
                        <FormItem.GroupItem type='color'>
                            <FormItem.Input defaultValue='teal' type='radio' name='color' defaultChecked={settings.color === 'teal'} />
                            <FormItem.Label>Teal</FormItem.Label>
                        </FormItem.GroupItem>
                        <FormItem.GroupItem type='color'>
                            <FormItem.Input defaultValue='purple' type='radio' name='color' defaultChecked={settings.color === 'purple'} />
                            <FormItem.Label>Purple</FormItem.Label>
                        </FormItem.GroupItem>
                    </FormItem.Group>
                </FormItem>
                <FormItem.Input value='Apply' type='submit' />
            </form>
        </Modal>
    </>;
};

// Props
Home.defaultProps = {};

export default Home;
