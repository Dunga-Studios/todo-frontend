import React from 'react'
import TodoListItemComponent from './todo-list-item';

function TodoListComponent({todos, remove, edit }) {
    return (
        <div className="row">
            {todos.map((todo, index) => (
                <div className="col-4 mt-4" key={index}>
                    <TodoListItemComponent todo={todo} remove={remove} edit={edit}/>
                </div>
            ))}
        </div>
    )
}

export default TodoListComponent
