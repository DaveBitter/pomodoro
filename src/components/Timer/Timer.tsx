// Libs
import React, { useEffect, useRef, useState } from 'react';

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
let interval: any;
const Timer = ({ playState, duration, handleToggle, ...attributes }: IProps) => {
    const [timeLeft, setTimeLeft] = useState<number>(duration);

    useEffect(() => {
        switch (playState) {
            case 'INITIAL':
                setTimeLeft(duration);
                clearInterval(interval)
                return;
            case 'PAUSED':
                clearInterval(interval)
                return;
            case 'ACTIVE':
                if (timeLeft <= 0) {
                    return;
                }

                interval = setTimeout(() => {
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

    const [circumference, setCircumference] = useState(0);
    const [offset, setOffset] = useState(0);
    const circleRef = useRef<SVGCircleElement | null>(null)

    useEffect(() => {
        if (!circleRef.current) { return; }

        const radius = circleRef.current.r.baseVal.value;
        const updatedCircumference = radius && radius * 2 * Math.PI;

        const updatedOffset = updatedCircumference - timeLeft / duration * updatedCircumference;

        setCircumference(updatedCircumference);
        setOffset(updatedOffset);
    }, [timeLeft])

    useEffect(() => {
        setTimeLeft(duration)
    }, [duration])

    return <div className='timer-wrapper'>
        <div className='timer' {...attributes}>
            <span className='timer__counter'>{getFormattedTimeLeft(timeLeft)}</span>
            <svg className='timer__stroke' viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle ref={circleRef} cx="50" cy="50" r="50" style={{ strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: `${offset}` }} />
            </svg>
            <span className='timer__play-state'>{getLabelForPlaystate()}</span>
            <button className='timer__toggle' onClick={handleClick}>{getLabelForPlaystate()}</button>
        </div>
    </div>;
};

// Props
Timer.defaultProps = {};

export default Timer;
