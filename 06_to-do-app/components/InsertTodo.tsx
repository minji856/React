import { useState } from "react";
import style from '../utils/InsertTodo.module.css'

const InsertTodo:React.FC<{onAddTodo: (item: string) => void}> = (props) => {
    const [text, setText] = useState("");

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault(); // 역할 일시중지
        // 잘못들어간 공백, 값이 없을때 입력 안 되게
        if (text.trim() !== ""){
            props.onAddTodo(text);
            setText("");
        }
    }

    const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler} className={style.form}>
                <h3>할일 추가</h3>
                <input type="text" onChange={changeHandler} value={text}/>
                <button>추가</button>
            </form>
        </div>
    )
}

export default InsertTodo;