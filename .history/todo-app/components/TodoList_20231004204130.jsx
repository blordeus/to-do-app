import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos, colorMode}) => {
  return (
    <>
        {
            todos.length > 0 && todos.map((todo) =>(
            <TodoItem key={todo.id} colorMode={colorMode}/>)
            );
        };
    </>
  )
}
