import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count=>count+1)} 
        onMouseOut={()=>{setCount(0)}}>클릭</button>
    </div>
  )
}

export default App;