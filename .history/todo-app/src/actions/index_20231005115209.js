import axios from 'axios';

export const fetchTodos = async () => {
    const {data} = await axios.get("http://localhost:7000/data");

    return data.todos;
};

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
    const updatedData = data.todos.filter((todo) => todo.id !== id);


}