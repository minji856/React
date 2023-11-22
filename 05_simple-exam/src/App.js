import React, { useReducer, useState } from 'react';

/*
const initialState = {
    count : 0,
    member : [{name:"", age:"", address:""}]
}
*/

// 중복되지 않게 Hashcode 생성
const uid = () => { 
  let a = new Uint32Array(3)
  window.crypto.getRandomValues(a)
  return (
    performance.now().toString(36) +
    Array.from(a)
      .map(A => A.toString(36))
      .join('')
  ).replace(/\./g, '')
}

const memberReducer = (state, action) => {
  switch(action.type){
    case "ADD":
      return {
        ...state,
        member: [...state.member, {...action.info}],
        count: state.count + 1
        // count: state.count ++ 도 가능
        };
    case "DELETE":
      // 나머지 회원들만 filteredMember에 저장됨. 진짜로 삭제하는게 아니고 필터링
      let filteredMember = state.member.filter((one)=>one.id !== action.idx)
      return {
        ...state,
        member:[...filteredMember],
        count: state.count - 1
      }
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatcher] = useReducer(memberReducer, {count:0, member:[]});
  const [info, setInfo] = useState({});
  
  const addMember = () => {
    dispatcher({type:"ADD", info:info})
  }

  // 데이터 가지고 있을 필요 없고, ID만 있으면 된다
  const delMember = (e) => {
    dispatcher({type:"DELETE", idx:e.target.value})
  }

  // 이벤트를 변수로 가져와야한다
  const onChangeHandler = (e) => {
    // console.log(e.target.name)
    // 전개 연산자가 없으면 데이터가 덮어 씌워진다
    // id로 고유한 id 추가해줌
    setInfo({...info, id:uid(), [e.target.name]:[e.target.value]})
  }

  return (
    <div>
      <div>
        <h1>전체 회원 수 : {state.count}</h1>
        <div>
          <label>이름 : </label>
          <input
            type={'text'}
            name="name"
            autoComplete="off"
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>나이 : </label>
          <input
            type={'number'}
            name="age"
            autoComplete="off"
            onChange={onChangeHandler}
          ></input>
        </div>
        <div>
          <label>주소 : </label>
          <input
            type={'text'}
            name="address"
            autoComplete="off"
            onChange={onChangeHandler}
          ></input>
        </div>

        <button onClick={addMember}>추가</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>지역</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.member.map((mem)=>(
            <tr>
              <td>{mem.name}</td>
              <td>{mem.age}</td>
              <td>{mem.address}</td>
              <td>
                <button onClick={delMember} value={mem.id}>
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App;