import React, {memo} from 'react';

const ToDos = memo(({todos}) => {
    console.log('ToDos');
    return (
        <div>
            {todos.map((todo, index)=> <div key={index}>{todo}</div>)}
        </div>
    );
})

export default ToDos;