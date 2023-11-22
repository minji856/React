import React from 'react';
import Todos from './components/Todos';

function App() {

  // 할 일
  const todos = []
  
  return (
    <div>
      <Todos items={["공부하기", "청소하기"]}/>
    </div>
  );
}

export default App;
