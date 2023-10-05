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
    data.todos.forEach
    await axios.post("http://localhost:7000/data", {todos: newData});
}