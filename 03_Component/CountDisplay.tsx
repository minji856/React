import * as React from 'react';
// <h3>Count: {this.state.num}</h3> 을 따로 출력할 수 있게 해주는 컴퍼넌트
// 부모는 Count. 즉 props로 받아야한다.

interface CountDisplayProps {
    count: number;
}

interface CountDisplayState {
}

class CountDisplay extends React.Component<CountDisplayProps,
                                            CountDisplayState>{
    constructor(props:CountDisplayProps){
        super(props)
    }

    componentDidUpdate(): void {
        console.log("[Updating] CountDisplay / componentDidUpdate")
    }

    componentDidMount(): void {
        console.log("[Mounting] CountDisplay / componentDidMount")
    }

    componentWillUnmount(): void {
        console.log("[Unmounting] CountDisplay / componentWillUnmount")
    }

    render(){
        return <h3>Count: {this.props.count}</h3>
    }
}

export default CountDisplay