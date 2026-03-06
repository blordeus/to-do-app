const STORAGE_KEY = "todos";

const getTodos = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const fetchTodos = async () => {
  return getTodos();
};

export const addTodo = async (todo) => {
  const todos = getTodos();
  saveTodos([todo, ...todos]);
};

export const isTodoCompleted = async (id) => {
  const todos = getTodos();
  const todo = todos.find((t) => t.id === id);
  return todo ? todo.isCompleted : false;
};

export const markToDoCompleted = async (id) => {
  const todos = getTodos();
  const updated = todos.map((t) =>
    t.id === id ? { ...t, isCompleted: !t.isCompleted } : t
  );
  saveTodos(updated);
};

export const deleteTodo = async (id) => {
  const todos = getTodos();
  saveTodos(todos.filter((t) => t.id !== id));
};

export const countUncompletedTodo = async () => {
  const todos = getTodos();
  return todos.filter((t) => !t.isCompleted).length;
};

export const clearAllCompletedTodos = async () => {
  const todos = getTodos();
  saveTodos(todos.filter((t) => !t.isCompleted));
};

export const getActiveTodos = async () => {
  const todos = getTodos();
  return todos.filter((t) => !t.isCompleted);
};

export const getCompletedTodos = async () => {
  const todos = getTodos();
  return todos.filter((t) => t.isCompleted);
};