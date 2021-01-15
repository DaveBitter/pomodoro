// Libs
import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import FormItem from './FormItem';

// Story
storiesOf('General', module)
    .add('FormItem', () => <FormItem>
        <FormItem.Label>Form item</FormItem.Label>
    </FormItem>);
