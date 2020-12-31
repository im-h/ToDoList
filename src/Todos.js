import React from 'react'


const Todos = ({todos, deleteTodo}) => {
    const todolist = todos.length ? (
        todos.map((todo, i) => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{i+1}. {todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center-align"> There are no todos left! </p>
    );

    return (
        <div className="todos collection">
            {todolist}
        </div>
    )
}

export default Todos;