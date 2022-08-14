import React, {useState, MouseEvent} from 'react';
import s from './Music.module.css'
export const Music = () => {
    const [counter, setCounter] = useState<number>(0)
    const onclockHandler = (e:MouseEvent<HTMLButtonElement>) => {
        if (counter < 10) {
            setCounter(counter + 1)
        }
    }

    return (
        <div>
            <button onClick={onclockHandler}>count</button>

            {counter ===3? <div className={s.sq}>{counter}</div>: <div className={s.sqr}>{counter}</div>}
        </div>
    );
};

