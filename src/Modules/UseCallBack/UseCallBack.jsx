import React, {useState} from 'react';
import ToDos from "../ToDos/ToDos";

const UseCallBack = () => {
    const [todos, setTodos] = useState(['newTodo'])

    const [count, setCount] = useState(0)

    return (
        <div>
            <ToDos todos={todos}/>
            <div>Count: {count}</div>
            <button onClick={()=> setCount(prevState => ++prevState)}>incCount</button>
        </div>
    );
};

export default UseCallBack;