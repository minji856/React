import * as React from 'react';
// counter에 +1 -1 하는 기능을 분리

interface useCounterReturnType{
    count: number,
    plus: ()=> void,
    minus: ()=> void,
    countLog: ()=> void,
    memoizedNumber :number;
}

export function useCounter (){
    const [count, setCount] = React.useState(0);
    
    // const plus = () => setCount((prev)=>prev + 1);
    const plus = React.useCallback (()=> setCount((prev)=>prev + 1), []);
    // const minus = () => setCount((prev)=>prev - 1);
    const minus = React.useCallback (()=> setCount((prev)=>prev - 1), []);
    const countLog = React.useCallback (()=>console.log(count), []);


    // useMemo 함수 만들기
    const memoizedNumber = React.useMemo(()=>{
        let result = count;
        console.log("Calc Start");
        for(let i=0; i<10000; i++){
            console.log("result:", result);
            result += i;
        }
        console.log("Calc Ends");
        return result;
    }, [count]);
    
    // 이때는 () 말고 {} 로 묶어주기
    return { count, plus, minus, countLog, memoizedNumber};
}

// export default useCounter; default 안 쓸꺼면 직접 함수에 적어주기