import * as React from 'react';

interface CounterProps{
    title: string;
}

interface CounterState{
    num: number;
    hideCount: boolean;
}

// Java와 비슷하게 파일명과 이름 같게 하고 대문자로
class Counter extends React.Component<CounterProps, CounterState>{
    constructor(props: CounterProps){
        super(props)
        this.state = {num:10, hideCount:false}

        console.log("Mounting : In constructor");
    }

    // setState => state update => render() => element 
    // => reconciliation => virtual DOM => real DOM => 화면 노출
    handleClick = () => {
        //// this.state.num = 11; 직접 접근 X. 수정 안 된다
        // console.log("Clicked with count: ", this.state.num);
        // this.setState({num:20})
        this.setState((prev)=>{
            // console.log(prev)
            return {num:prev.num+1}
        })
    }

    handleToggle = () => {
        this.setState((prev)=>{
            return {hideCount:prev.hideCount}
        })
    }

    componentDidMount(): void {
        console.log("Mounting : In componentDidMount")
    }

    componentDidUpdate(): void {
        console.log("updating : In componentDidUpdate")
    }

    render(){
        console.log("Mounting & Updating : In render")
        return  (<div>
                    <h1>{this.props.title}</h1>
                    <h3>Count: {this.state.num}</h3>
                    <button onClick={this.handleClick}>Plus</button>
                    <button onClick={this.handleToggle}>Toggle Count</button>
                </div>);
    }
}

export default Counter;