// Libs
import React from 'react';

// Utils

// Resources

// Components

// Interface
interface IPropsTabAccordionPanel {
    children: JSX.Element[] | JSX.Element | string | number,
    isActive: boolean
}

interface IPropsTabAccordionPanels {
    children: JSX.Element[] | JSX.Element | string | number
}

interface IPropsTabAccordionTab {
    children: JSX.Element[] | JSX.Element | string | number,
    isActive: boolean,
    handleClick: () => void
}

interface IPropsTabAccordionTabs {
    children: JSX.Element[] | JSX.Element | string | number
}

interface IPropsTabAccordion {
    children: JSX.Element[] | JSX.Element | string | number
}

// Component
const TabAccordionPanel = ({ children, isActive, ...attributes }: IPropsTabAccordionPanel) => {
    return <li className='tab-accordion__panel' data-is-active={isActive} data-panel {...attributes}>
        {children}
    </li>;
};

const TabAccordionPanels = ({ children, ...attributes }: IPropsTabAccordionPanels) => {
    return <ul className='tab-accordion__panels' {...attributes}>
        {children}
    </ul>;
};

const TabAccordionTab = ({ children, handleClick, isActive, ...attributes }: IPropsTabAccordionTab) => {
    return <li className='tab-accordion__tab' data-is-active={isActive} data-tab {...attributes}>
        <button className='tab-accordion__tab-button' onClick={handleClick} data-tab-trigger>{children}</button>
    </li>;
};

const TabAccordionTabs = ({ children, ...attributes }: IPropsTabAccordionTabs) => {
    return <ul className='tab-accordion__tabs' {...attributes}>
        {children}
    </ul>;
};

const TabAccordion = ({ children, ...attributes }: IPropsTabAccordion) => {
    return <div className='tab-accordion' {...attributes}>
        {children}
    </div>;
};

// Props
TabAccordion.defaultProps = {};

TabAccordion.Panel = TabAccordionPanel;
TabAccordion.Panels = TabAccordionPanels;
TabAccordion.Tab = TabAccordionTab;
TabAccordion.Tabs = TabAccordionTabs;

export default TabAccordion;
