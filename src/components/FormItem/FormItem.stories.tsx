// Libs
import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import FormItem from './FormItem';

// Story
storiesOf('FormItem', module)
    .add('Number inputs', () => <FormItem>
        <FormItem.Title>time (minutes)</FormItem.Title>
        <FormItem.Group>
            <FormItem.GroupItem type='number'>
                <FormItem.Label>pomodoro</FormItem.Label>
                <FormItem.Input defaultValue='25' min='5' step='5' type='number' name='POMODORO' />
            </FormItem.GroupItem>
            <FormItem.GroupItem type='number'>
                <FormItem.Label>short break</FormItem.Label>
                <FormItem.Input defaultValue='5' min='5' step='5' type='number' name='SHORT_BREAK' />
            </FormItem.GroupItem>
            <FormItem.GroupItem type='number'>
                <FormItem.Label>long break</FormItem.Label>
                <FormItem.Input defaultValue='15' min='5' step='5' type='number' name='LONG_BREAK' />
            </FormItem.GroupItem>
        </FormItem.Group>
    </FormItem>)
    .add('Font inputs', () => <FormItem>
        <FormItem.Title>font</FormItem.Title>
        <FormItem.Group>
            <FormItem.GroupItem type='font'>
                <FormItem.Input defaultValue='Public Sans' type='radio' name='font' defaultChecked />
                <FormItem.Label>Aa</FormItem.Label>
            </FormItem.GroupItem>
            <FormItem.GroupItem type='font'>
                <FormItem.Input defaultValue='Tahoma' type='radio' name='font' />
                <FormItem.Label>Aa</FormItem.Label>
            </FormItem.GroupItem>
            <FormItem.GroupItem type='font'>
                <FormItem.Input defaultValue='Georgia' type='radio' name='font' />
                <FormItem.Label>Aa</FormItem.Label>
            </FormItem.GroupItem>
        </FormItem.Group>
    </FormItem>)
    .add('Color inputs', () => <FormItem>
        <FormItem.Title>color</FormItem.Title>
        <FormItem.Group>
            <FormItem.GroupItem type='color'>
                <FormItem.Input defaultValue='orange' type='radio' name='color' defaultChecked />
                <FormItem.Label>Orange</FormItem.Label>
            </FormItem.GroupItem>
            <FormItem.GroupItem type='color'>
                <FormItem.Input defaultValue='teal' type='radio' name='color' />
                <FormItem.Label>Teal</FormItem.Label>
            </FormItem.GroupItem>
            <FormItem.GroupItem type='color'>
                <FormItem.Input defaultValue='purple' type='radio' name='color' />
                <FormItem.Label>Purple</FormItem.Label>
            </FormItem.GroupItem>
        </FormItem.Group>
    </FormItem>);
