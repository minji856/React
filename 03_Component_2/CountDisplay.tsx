import * as React from 'react';
// function으로 바꿔준 ver

interface CountDisplayProps {
    count: number;
}

function CountDisplay (props:CountDisplayProps):React.ReactElement{
    // 계속 호출되는 render
    React.useEffect(()=>{
        console.log("[Rendered] CountDisplay / useEffect")}
    );

    // 딱 한번만 호출. 의존성
    React.useEffect(()=>{
        console.log("[Mounted] CountDisplay / useEffect")
    }, []);

    return (
        <h3>Count: {props.count}</h3>
    )
}

export default CountDisplay