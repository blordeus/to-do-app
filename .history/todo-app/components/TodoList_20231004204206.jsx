import React from 'react'
import { TodoItem } from './TodoItem'

<<<<<<<<<<<<<  ✨ Codeium AI Suggestion  >>>>>>>>>>>>>>
-export const TodoList = ({todos, colorMode}) => {
-  return (
-    <>
-        {
-            todos.length > 0 && todos.map((todo) =>(
-            <TodoItem key={todo.id} colorMode={colorMode} todo={todo}/>)
-            );
-        };
-    </>
-  )
-}
+export const TodoList = ({ todos, colorMode }) => {
+  return (
+    <>
+      {todos.length > 0 && todos.map((todo) => (
+        <TodoItem key={todo.id} colorMode={colorMode} todo={todo} />
+      ))}
+    </>
+  );
+};
<<<<<  bot-b4ecb2b4-e767-4a2f-8760-e336ac1c508d  >>>>>
