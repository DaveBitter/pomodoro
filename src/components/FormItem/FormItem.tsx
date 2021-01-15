// Libs
import React from 'react';

// Utils

// Resources

// Components

// Interface
interface IPropsFormItemInput {
    defaultValue?: string | number,
    value?: string | number,
    defaultChecked?: boolean,
    type: string,
    name?: string,
    min?: string | number,
    max?: string | number,
    step?: string | number
}

interface IPropsFormItemLabel {
    children: JSX.Element[] | JSX.Element | string | number,
}

interface IPropsFormItemGroupItem {
    type?: 'number' | 'font' | 'color',
    children: JSX.Element[] | JSX.Element | string | number,
}

interface IPropsFormItemGroup {
    children: JSX.Element[] | JSX.Element | string | number,
}

interface IPropsFormItemTitle {
    children: JSX.Element[] | JSX.Element | string | number,
}

interface IPropsFormItem {
    children: JSX.Element[] | JSX.Element | string | number,
}

// Component
const FormItemInput = ({ ...attributes }: IPropsFormItemInput) => {
    return <input className='form-item__input' {...attributes}></input>;
};

const FormItemLabel = ({ children, ...attributes }: IPropsFormItemLabel) => {
    return <label className='form-item__label' {...attributes}>{children}</label>;
};

const FormItemGroupItem = ({ children, type, ...attributes }: IPropsFormItemGroupItem) => {
    return <div className='form-item__group-item' data-type={type} {...attributes}>{children}</div>;
};

const FormItemGroup = ({ children, ...attributes }: IPropsFormItemGroup) => {
    return <div className='form-item__group' {...attributes}>{children}</div>;
};

const FormItemTitle = ({ children, ...attributes }: IPropsFormItemTitle) => {
    return <p className='form-item__title' {...attributes}>{children}</p>;
};

const FormItem = ({ children, ...attributes }: IPropsFormItem) => {
    return <div className='form-item' {...attributes}>{children}</div>;
};

// Props
FormItem.Input = FormItemInput;
FormItem.Label = FormItemLabel;
FormItem.GroupItem = FormItemGroupItem;
FormItem.Group = FormItemGroup;
FormItem.Title = FormItemTitle;
FormItem.defaultProps = {};

export default FormItem;