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

export isTodoCompleted = async (id) => {
    const {}
}