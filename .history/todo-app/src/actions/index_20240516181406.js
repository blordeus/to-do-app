import axios from 'axios';


<<<<<<<<<<<<<<  ✨ Codeium Command 🌟 >>>>>>>>>>>>>>>>
 export const fetchTodos = async () => {
+    const response = await axios.get(
+        "https://to-do-app-8ec0e-default-rtdb.firebaseio.com/todos.json"
+    );
-    const {data} = await axios.get("http://localhost:7000/data");
 
+    return Object.values(response.data);
+};
-    return data.todos;
-};
<<<<<<<  eab7b0e8-40fb-4939-a7b9-ac5ebcc308f8  >>>>>>>

export const addTodo = async (todo) => {
    const {data} = await axios.get("http://localhost:7000/data");

    const newData = [todo, ...data.todos];

    await axios.post("http://localhost:7000/data", {todos: newData});
};

export const isTodoCompleted = async (id) => {
    const { data } = await axios.get("http://localhost:7000/data");
    let completed;
    data.todos.forEach((todo) => {
        if (todo.id === id) {
            completed = todo.isCompleted;
        }
    });
    return completed;
}

export const markToDoCompleted = async (id) => {
    const { data } = await axios.get("http://localhost:7000/data");
    data.todos.forEach((todo) => {
        if (todo.id === id) {
            todo.isCompleted = !todo.isCompleted;
        }
    })
    await axios.post("http://localhost:7000/data", {todos: data.todos});
}

export const deleteTodo = async (id) => {
    const { data } = await axios.get("http://localhost:7000/data");
    const updatedData = data.todos.filter((todo) => todo.id !== id);
    await axios.post("http://localhost:7000/data", {todos: updatedData});
}

export const countUncompletedTodo = async () => {
    const { data } = await axios.get("http://localhost:7000/data");
    return data.todos.filter((todo) => !todo.isCompleted).length;
}

export const clearAllCompletedTodos = async () => {
    const { data } = await axios.get("http://localhost:7000/data");
    const updatedData = data.todos.filter((todo) => !todo.isCompleted);
    await axios.post("http://localhost:7000/data", {todos: updatedData});

}

export const getActiveTodos = async () => {
    const { data } = await axios.get("http://localhost:7000/data");
    
    return data.todos.filter((todo) => !todo.isCompleted);

}

export const getCompletedTodos = async () => {
    const { data } = await axios.get("http://localhost:7000/data");
    
    return data.todos.filter((todo) => todo.isCompleted);

}