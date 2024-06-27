import React, {memo} from 'react';

const ToDos = memo(({todos, addTodo}) => {
    console.log('ToDos');
    return (
        <div>
            {todos.map((todo, index)=> <div key={index}>{todo}</div>)}
            <button onClick={addTodo}>addTodo</button>
        </div>
    );
})

export default ToDos;