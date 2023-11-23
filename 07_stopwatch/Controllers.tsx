import * as React from "react";
import { STATUS } from "./hooks/useStopwatch";

interface IProps {
    state: STATUS;
    record: () => void;
    stop: () => void;
    reset: () => void;
    start: () => void;
}

const Controllers:React.FC<IProps> = ({state, record, start, stop, reset}) => {
    return (
        <div>
            {/* 삼합연산자 사용 ? T : F */}
            {state === STATUS.PROCESSING ?
                <>
                    <button>랩</button>
                    <button>정지</button>
                </>
            :
                <React.Fragment>
                    <button>초기화</button>
                    <button>시작</button>
                </React.Fragment>
            }
        </div>
    );
}

export default Controllers;