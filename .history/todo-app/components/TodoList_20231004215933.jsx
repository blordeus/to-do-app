import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos, colorMode, handleCompletedTodo, hand }) => {
  return (
    <>
      {todos.length > 0 && todos.map((todo) => (
        <TodoItem key={todo.id} colorMode={colorMode} todo={todo} handleCompletedTodo={handleCompletedTodo} handleDeleteTodo={handleDeleteTodo}/>
      ))}
    </>
  );
};
