// Libs
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

// Utils
import { playStateType } from '../../../pages';

// Components
import Timer from './Timer';

// Story
storiesOf('General', module)
    .add('Timer', () => {
        const [playState, setPlayState] = useState<playStateType>('INITIAL');

        const handleToggle = () => setPlayState(playState === 'ACTIVE' ? 'PAUSED' : 'ACTIVE');

        return <Timer playState={playState} duration={5 * 1000} handleToggle={handleToggle} />
    });
