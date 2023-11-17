import * as React from 'react';
import CountDisplay from './CountDisplay';
import { useCounter } from './hooks/useCounter'; // default 아니여서 {} 로 가져오기
import useToggle from './hooks/useToggle';

interface CounterProps{
    title: string;
}

function Counter (props:CounterProps): React.ReactElement{

    const {count, plus, minus} = useCounter();
    const [ hideCount, toggle ] = useToggle();

    React.useEffect(()=>{console.log("[Rendered] Count / useEffect")});
    React.useEffect(()=>{console.log("[Mounted] Count / useEffect")}, []);

    return (
        <div>
            <h1>{props.title} / {width}</h1>
            {!hideCount && <CountDisplay count={count}/>}
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
            <button onClick={toggle}>Toggle Count</button>
        </div>
    )
}

export default Counter;