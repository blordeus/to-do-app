import axios from 'axios';
import 

export const fetchTodos = async () => {
    const {data} = await axios.get("http://localhost:8000/data");

    return data.todos;
};

export const addTodo = async (todo) => {
    const {data} = await axios.get("http://localhost:8000/data");

    const newData = [todo, ...data.todos];

    await axios.post("http://localhost:8000/data", {todos: newData});
};