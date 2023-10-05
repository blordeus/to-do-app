import React from 'react'

export const TodoList = ({todos, colorMode}) => {
  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
      ))}
    </>
  )
}
