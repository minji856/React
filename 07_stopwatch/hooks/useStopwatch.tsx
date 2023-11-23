import * as React from 'react';

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

// 기능을 위해서 start, set, reset, recore 함수 넘겨주기
interface UseStopwatchReturnType {
    status: STATUS;
    seconds: number;
    laps: Lap[];

    start: ()=>void;
    stop: ()=>void;
    reset: ()=>void;
    record: ()=>void;
}

const useStopwatch: () => UseStopwatchReturnType = () => {
    return;
}