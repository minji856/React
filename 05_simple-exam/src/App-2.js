import React, {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState({title:'내용없음', color:'red'})
  const [inputText, setInputText] = useState('');

  const inputHandler = (e) => {
    //console.log(e.target.value);
    let copy = {...message, title: e.target.value};
    setMessage(copy);
  };

  // 간단하니까 아래에 바로 만들어줘도 된다
  const clickHandler = () => {
    alert(message.title)
  }

  return (
    <div>
      <h1 style={message.title !== '내용없음' ? {color:message.color} : null}>
            {message.title}</h1>
      <hr/>
      <input type='text' placeholder='내용을 입력'
        onChange={inputHandler}/>
      <button onClick={clickHandler}>클릭</button>
    </div>
  )
}

export default App;