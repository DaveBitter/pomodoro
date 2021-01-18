// Libs
import React from 'react';
import { storiesOf } from '@storybook/react';

// Components
import Modal from './Modal';

// Story
storiesOf('Modal', module)
    .add('default', () => <Modal heading='Modal heading' isOpen={true} trigger='trigger' handleClose={() => { }}>
        <h2>You can put any content in this container</h2>
    </Modal>);
