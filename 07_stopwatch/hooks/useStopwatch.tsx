import React, { useState, useMemo } from 'react';

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
            id:0,
            title: "랩",
            seconds: 0
        }
    }, []); // 별도로 계산을 해줘야하는. 이전까지 기록된거에서 시간이 돌아가야함

    const start = React.useCallback(()=>{}, []);
    const stop = React.useCallback(()=>{}, []);
    const reset = React.useCallback(()=>{}, []);
    const record = React.useCallback(()=>{}, []);
    
    return {seconds, status, laps, nextLap, start, stop, reset, record};
}

export default useStopwatch;