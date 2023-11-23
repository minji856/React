import React, { useState } from 'react';
import InsertTodo from './components/InsertTodo';
import Todos from './components/Todos';
import Todo from './utils/todos'

function App() {

  // 할 일
  // const todos = [new Todo("공부하기"), new Todo("청소하기")] 가짜테이더
  const [ todos, setTodos ] = useState<Todo[]>([]);
  
  const addTodoHandler = (item: string) => {
    const newTodo = new Todo(item);

    setTodos((prevTodos)=>{
      return [...prevTodos, newTodo];
    });
  }

  const removeTodoHandler = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <InsertTodo onAddTodo={addTodoHandler}/>
      <hr/>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
    </div>
  );
}

export default App;
