import React, {useReducer, useState} from 'react';

// 별도의 컴포넌트로 분리 (편의상 한 페이지에 만듬)
const accountReducer = (state, action) => {
  switch(action.type){
    case "DEPOSIT":
      return state + Number(action.money);
    case "WITHDRAW":
      return state - Number(action.money);
    // 기본값을 0원으로 해놨으니까 state
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(accountReducer, 0);
  const [money, setMoney] = useState(0); // 단순히 값을 저장하기 위해서 reducer말고 state사용

  const clickDeposit = () => {
    dispatch({type:"DEPOSIT", money:money})
  }

  const clickWithdraw = () => {
    dispatch({type:"WITHDRAW", money:money})
  }

  return (
    <div>
      <h1>금액을 입력하세요</h1>
      <input type="number" step={1000}
        onChange={(e)=>{setMoney(e.target.value)}}/>
      <hr/>
      <h2>입금 또는 출금 버튼을 클릭하세요</h2>
      <button onClick={clickDeposit}>입금(Deposit)</button>
      <button onClick={clickWithdraw}>출금(Withdraw)</button>
      <h2>현재 잔액 : {state}</h2>
    </div>
  )
}

export default App;