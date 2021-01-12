// Libs
import React, { useEffect, useState } from 'react';

// Utils
import { playStateType } from '../../../pages/index';;

// Resources

// Components

// Interface
interface IProps {
    playState: playStateType
    duration: number
    handleToggle: () => void
}

const pad = (num: number, size: number) => ('000' + num).slice(size * -1);

const getFormattedTimeLeft = (timeLeft: number) => {
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    return `${pad(minutes, 2)}:${pad(seconds, 2)}`;
}

// Component
const Timer = ({ playState, duration, handleToggle, ...attributes }: IProps) => {
    const [timeLeft, setTimeLeft] = useState<number>(duration);

    useEffect(() => {
        switch (playState) {
            case 'INITIAL':
                setTimeLeft(duration);
                return;
            case 'PAUSED':
                return;
            case 'ACTIVE':
                if (timeLeft <= 0) {
                    return;
                }

                setTimeout(() => {
                    setTimeLeft(timeLeft - 1000);
                }, 1000)
                return;
            default:
                return;
        }
    }, [timeLeft, playState]);

    const getLabelForPlaystate = () => {
        if (timeLeft <= 0) {
            return 'restart'
        }

        switch (playState) {
            case 'INITIAL':
                return 'start'
            case 'ACTIVE':
                return 'pause'
            case 'PAUSED':
                return 'resume'
            default:
                return '';
        }
    }

    const handleClick = () => timeLeft > 0 ? handleToggle() : setTimeLeft(duration);

    return <div className='timer' {...attributes}>
        {getFormattedTimeLeft(timeLeft)}
        {getLabelForPlaystate()}
        <button className='timer__toggle' onClick={handleClick}>{getLabelForPlaystate()}</button>
    </div>;
};

// Props
Timer.defaultProps = {};

export default Timer;
