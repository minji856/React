import * as React from 'react';
// counter에 +1 -1 하는 기능을 분리

interface useCounterReturnType{
    count: number,
    plus: ()=> void;
    minus: ()=> void;
}

export function useCounter (){
    const [count, setCount] = React.useState(0);
    
    const plus = () => setCount((prev)=>prev + 1);
    const minus = () => setCount((prev)=>prev - 1);
    
    // 이때는 () 말고 {} 로 묶어주기
    return { count, plus, minus};
}

// export default useCounter; default 안 쓸꺼면 직접 함수에 적어주기