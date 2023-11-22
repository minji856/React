import React, {useReducer} from 'react';
// 일종의 키오스크

// 별도의 컴포넌트로 분리 (편의상 한 페이지에 만듬)
const priceReducer = (price, action) => {
  switch(action.type){
    case 'HAMBURGER':
      return price + 4000;
    case 'POTATO':
      return price + 3000;
    case 'COKE':
      return price + 1000;
    default:
      return price;
  }
}

const App = () => {
  const [price, priceDispatch] = useReducer(priceReducer, 0);

  const clickHamburger = () => {
    priceDispatch({type:'HAMBURGER'})
  }

  const clickPotato = () => {
    priceDispatch({type:'POTATO'})
  }

  const clickCoke = () => {
    priceDispatch({type:'COKE'})
  }

  return (
    <div>
      <h1>햄버거 가게</h1>
      <h3>지불할 금액 : {price}</h3>
      <hr/>
      <button onClick={clickHamburger}>햄버거(4000원)</button>
      <button onClick={clickPotato}>감자튀김(3000원)</button>
      <button onClick={clickCoke}>콜라(1000원)</button>
    </div>
  )
}

export default App;