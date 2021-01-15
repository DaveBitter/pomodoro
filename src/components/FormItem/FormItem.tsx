// Libs
import React from 'react';

// Utils

// Resources

// Components

// Interface
interface IPropsFormItem {
    children: JSX.Element[] | JSX.Element | string | number,

}
interface IPropsFormItemLabel {
    children: JSX.Element[] | JSX.Element | string | number,
}

// Component
const FormItemLabel = ({ children, ...attributes }: IPropsFormItemLabel) => {
    return <label className='form-item__label' {...attributes}>{children}</label>;
};

const FormItem = ({ children, ...attributes }: IPropsFormItem) => {
    return <div className='form-item' {...attributes}>{children}</div>;
};

// Props
FormItem.Label = FormItemLabel;
FormItem.defaultProps = {};

export default FormItem;