import * as React from "react";
import { Lap } from "./hooks/useStopwatch"
import styled from '@emotion/styled';
/* 기록을 출력하는 */   

interface IProps {
    laps: Lap[];
    nextLap: Lap;
}

const Laps:React.FC<IProps> = ({laps, nextLap}) => {
    return (
        <Container>
            {/* 곧 기록될 시간이 나타나는 부분 */}
            <Box>{nextLap.title} with {nextLap.seconds}</Box> 
            {
                laps.map((lap)=>{
                    return<Box>{lap.title} with {lap.seconds}</Box>
                })
            }
        </Container>
    );
}

const Container = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    overflow: auto;
`;

// container로 꼭 안해도 된다.
const Box = styled.div`
    display: flex;
    color: white;
    font-size: 24px;
    padding: 20px;
    align-items: center;
    justify-content: space-between;    
`;

export default Laps;