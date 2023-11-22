import React, {useState} from 'react';

const App = () => {
  const [regions, setRegions]= useState([{kor:"서울", eng:"seoul"},
                                        {kor:"부산", eng:"pusan"},
                                        {kor:"제주", eng:"jeju"}]);

  const [select, setSelect] = useState('');

  const changeHandler = (e) => {
      setSelect(e.target.value);
  }

  return (
    <div>
      <h1>라디오 버튼의 value를 출력</h1>
      <select onChange={changeHandler}>
        {
          regions.map(region => (
            <option key={region.eng} value={region.eng}>{region.kor}</option>
          ))
        }
      </select>
      <button onClick={()=>alert(select)}>확인</button>
    </div>
  )
}

export default App;