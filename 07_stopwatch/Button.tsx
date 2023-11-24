import * as React from 'react';
import styled from '@emotion/styled';
import {css} from '@emotion/react'; // 직접 변경해줄꺼니까 css 도 불러오기

// 일반적으로 재사용할 수 있는 Button
type ButtonType = "NORMAL" | "SUCCESS" | "ERROR"

interface IProps {
    type: ButtonType;
    onClick: ()=>void;
    children: React.ReactNode; // 평범한
}

// <Button> 태그 대신에 내가만든 컴퍼넌트 쓸거다.onClick도
const Button: React.FC<IProps> = ({type, onClick, children}) => {
    return (
        <Container onClick={onClick} type={type}>
            {children}
        </Container>
    )
}

// 원하는 속성만 골라서 가져오는 Omit
type styleProps = Omit<IProps, "onClick" | "children">

const getStyledbyType = (props: styleProps) => {
    let color="white";
    let background = "#333333";

    switch(props.type){
        case "NORMAL":
            color = "white";
            background = "#333333"
            break;
        case "SUCCESS":
            color = "gray";
            background = "#00f"
            break;
        case "ERROR":
            color = "blue";
            background = "#f00"
            break;
    }

    // css 형태로 바꿔줌
    return css`
        color: ${color};
        background-color:${background};
    `;
}

const  Container = styled.div<styleProps>`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    ${getStyledbyType}

    display: flex;
    justify-content: center;
    align-items: center;    
`;

export default Button;