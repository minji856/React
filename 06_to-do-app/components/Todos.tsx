import Todo from '../utils/todos';
import TodoItem from './TodoItem';
import style from '../utils/Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void}> = (props) => {
    return (
        <ul className={style.todos}>
            {
                props.items.map((item) => (
                    <TodoItem text={item.text} id={item.id}
                        onRemoveTodo = {props.onRemoveTodo}/>
                ))
            }
        </ul>
    );
}

export default Todos;