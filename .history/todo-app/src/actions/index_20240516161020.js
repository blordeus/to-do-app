import axios from 'axios';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAl6FKYUbyoFt1S03f8h-uK-7TVCectoAw",
  authDomain: "to-do-list-cd4ce.firebaseapp.com",
  projectId: "to-do-list-cd4ce",
  storageBucket: "to-do-list-cd4ce.appspot.com",
  messagingSenderId: "503610181658",
  appId: "1:503610181658:web:5bfb52a061213b2eeda9a3",
  measurementId: "G-VPC6RY7VTJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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