// 시, 분, 초를 나눠주는 함수
import { SECOND_PER_HOUR, SECOND_PER_MINUTE } from "../constants";

export const stopwatchTime = (seconds:number) => {
    // 시, 분, 초를 나눌 변수
    const h = Math.floor(seconds / SECOND_PER_HOUR);
    const m = Math.floor(seconds % SECOND_PER_HOUR / SECOND_PER_MINUTE);
    const s = seconds - h * SECOND_PER_HOUR - m * SECOND_PER_MINUTE;

    return `${(String(h)).padStart(2, "0")} :  
            ${(String(m)).padStart(2, "0")} :
            ${s.toFixed(2).padStart(2, "0")}`;
}