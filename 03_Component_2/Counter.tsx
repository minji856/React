import * as React from 'react';
import CountDisplay from './CountDisplay';
import { useCounter } from './hooks/useCounter'; // default 아니여서 {} 로 가져오기
import useToggle from './hooks/useToggle';
import useWindowWidth from './hooks/useWindowWidth';

interface CounterProps{
    title: string;
}

//function Counter (props:CounterProps): React.ReactElement{
//const Counter = (props:CounterProps) => {
//const Counter:React.FC<CounterProps> = (props) => {
const Counter:React.FC<CounterProps> = ({title}) => {
    console.log("첫번째 줄");
    const {count, plus, minus, countLog, memoizedNumber} = useCounter();
    console.log("useCount 다음")
    const [ hideCount, toggle ] = useToggle();
    console.log("useToggle 다음")

    React.useEffect(()=>{console.log("[Rendered] Count / useEffect")});
    React.useEffect(()=>{console.log("[Mounted] Count / useEffect")}, []);

    const width = useWindowWidth();

    console.log("useEffect 다음");
    countLog();

    return (
        <div>
            {/* <h1>{props.title} / {width}</h1> */}
            <h1>{title} / {width}</h1>
            {!hideCount && <CountDisplay count={count}/>}
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
            <button onClick={toggle}>Toggle Count</button>

            <CountDisplay count= {memoizedNumber}/>
        </div>
    )
}

export default Counter;