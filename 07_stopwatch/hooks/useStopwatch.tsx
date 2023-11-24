import React from 'react';
import { INTERVAL, MILLISEC_PER_SECOND } from '../constants';

// STATUS의 타입 지정
export enum STATUS {
    PROCESSING,
    STOP
}

// 기록되는 데이터의 포맷형식
export interface Lap {
    id: number;
    title: string;
    seconds: number
}

// 실제 데이터를 만들어서 메인 컴퍼넌트(stopwatch)에
// 기능을 위해서 start, set, reset, recore 함수 넘겨주기 외부에서 가져다 쓰는게 아니고 관리상 편하게
interface UseStopwatchReturnType {
    status: STATUS;
    seconds: number;
    laps: Lap[]; // 기록이 1개는 아니니까 배열로 받으려고
    nextLap: Lap; 

    // 스탑워치 기능
    start: ()=>void;
    stop: ()=>void;
    reset: ()=>void;
    record: ()=>void;
}

// interface니까 return의 역할
const useStopwatch: () => UseStopwatchReturnType = () => {
    // 현재 시간. Time에서 쓸 data
    const [seconds, setSeconds ] = React.useState(0);
    const [status, setStatus ] = React.useState<STATUS>(STATUS.PROCESSING); // 좀 더 안전하게 직접 만든 type 지정
    const [laps, setLaps] = React.useState<Lap[]>([]);
    const nextLap = React.useMemo<Lap>(()=>{
        return {
            id:laps.length + 1, // 다음꺼. 구별하기 위해 고유식별 추가
            title: `랩 ${laps.length + 1}`,
            seconds: seconds
        }
    }, [seconds, laps]); // 별도로 계산을 해줘야하는. 이전까지 기록된거에서 시간이 돌아가야함
    
    const start = React.useCallback(()=>{   
        if(status !== STATUS.STOP){
            return;
        }
        setStatus(STATUS.PROCESSING);
    }, [status]);

    const stop = React.useCallback(()=>{
        // 이미 중지된 상태에서 
        if(status !== STATUS.PROCESSING){
            return;
        }
        setStatus(STATUS.STOP);
    }, [status]);

    const reset = React.useCallback(()=>{
        setSeconds(0);
        setLaps([]);
    }, []);

    const record = React.useCallback(()=>{
        setLaps((prev)=>[nextLap, ...prev])
    }, [status, nextLap]);
    
    // 특정한 시점 lifecycle에만 실행되게
    React.useEffect(()=>{
        let intervalId:number;

        if(status === STATUS.PROCESSING){
            // 반복 돌면서 시간을 뿌려줄건데 여기선 값만 구해 주고 넘기기
            intervalId = window.setInterval(()=>{
                setSeconds((prev)=>{return prev + INTERVAL/MILLISEC_PER_SECOND})
            }, INTERVAL);
        }
        // clear 시키는 작업
        return () => {
            window.clearInterval(intervalId);
        }

    }, [status]);

    return {seconds, status, laps, nextLap, start, stop, reset, record};
}

export default useStopwatch;