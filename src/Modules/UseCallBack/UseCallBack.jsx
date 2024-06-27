import React, {useCallback, useState} from 'react';
import ToDos from "../ToDos/ToDos";

const UseCallBack = () => {
    const [todos, setTodos] = useState(['newTodo'])

    const [count, setCount] = useState(0)

    const addTodo = useCallback(()=> {
        setTodos(prevState => [...prevState, ['newTodo']])
    }, [])

    return (
        <div>
            <ToDos todos={todos} addTodo={addTodo}/>
            <div>Count: {count}</div>
            <button onClick={()=> setCount(prevState => ++prevState)}>incCount</button>
        </div>
    );
};

export default UseCallBack;