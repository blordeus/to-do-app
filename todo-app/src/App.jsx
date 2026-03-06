import { useEffect, useState } from "react";
import { Box, useColorMode, useBreakpointValue } from "@chakra-ui/react";
import { v4 } from "uuid";

import lightBackgroundImage from "./images/bg-desktop-light.jpg";
import darkBackgroundImage from "./images/bg-desktop-dark.jpg";
import mobileLightImage from "./images/bg-mobile-light.jpg";
import mobileDarkImage from "./images/bg-mobile-dark.jpg";

import Header from "../components/Header";
import { InputButton } from "../components/InputButton";
import {
  addTodo,
  fetchTodos,
  markToDoCompleted,
  deleteTodo,
  countUncompletedTodo,
  clearAllCompletedTodos,
  getActiveTodos,
  getCompletedTodos,
} from "./actions";
import { TodoList } from "../components/TodoList";
import { StatusBar } from "../components/StatusBar";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [itemLeft, setItemLeft] = useState(0);

  // Pick background image based on screen size and color mode
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgImage =
    isMobile
      ? colorMode === "light"
        ? mobileLightImage
        : mobileDarkImage
      : colorMode === "light"
      ? lightBackgroundImage
      : darkBackgroundImage;

  const handleAddTodo = async (input) => {
    const value = typeof input === "string" ? input : todo;
    if (!value.trim()) return;

    const newTodo = {
      id: v4(),
      title: value.trim(),
      isCompleted: false,
    };

    await addTodo(newTodo);
    setTodos(await fetchTodos());
    setTodo("");
  };

  // Keyboard: Enter key
  const handleKeyDown = (e) => {
    if (e.keyCode === 13) handleAddTodo();
  };

  const handleCompletedTodo = async (id) => {
    await markToDoCompleted(id);
    countUncompletedTodo().then((count) => setItemLeft(count));
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(await fetchTodos());
  };

  const handleClearAllClick = async () => {
    await clearAllCompletedTodos();
    fetchTodos().then((data) => setTodos(data));
  };

  const handleAllClick = async () => {
    fetchTodos().then((data) => setTodos(data));
  };

  const handleActiveClick = async () => {
    getActiveTodos().then((todos) => setTodos(todos));
  };

  const handleCompletedClick = async () => {
    getCompletedTodos().then((todos) => setTodos(todos));
  };

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  useEffect(() => {
    countUncompletedTodo().then((count) => setItemLeft(count));
  }, [todos]);

  return (
    <Box
      minH="100vh"
      background={
        colorMode === "light" ? "hsl(0,0%,98%)" : "hsl(235,21%,11%)"
      }
    >
      {/* Hero / Header area with background image */}
      <Box
        backgroundImage={bgImage}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        pb={{ base: "80px", md: "100px" }}
        pt={{ base: "40px", md: "70px" }}
      >
        <Box w={{ base: "90%", md: "60%", lg: "40%" }} m="auto">
          <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
          <InputButton
            colorMode={colorMode}
            todo={todo}
            setTodo={setTodo}
            addTodo={handleAddTodo}       // called on button click
            handleKeyDown={handleKeyDown} // called on Enter key
          />
        </Box>
      </Box>

      {/* Main content area */}
      <Box w={{ base: "90%", md: "60%", lg: "40%" }} m="auto" mt="-40px">
        <Box
          maxH="50vh"
          overflowY="auto"
          borderTopRadius="10px"
          backgroundColor={colorMode === "light" ? "white" : "#1a202c"}
        >
          <TodoList
            todos={todos}
            colorMode={colorMode}
            handleCompletedTodo={handleCompletedTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        </Box>
        <StatusBar
          colorMode={colorMode}
          itemLeft={itemLeft}
          handleClearAllClick={handleClearAllClick}
          handleAllClick={handleAllClick}
          handleActiveClick={handleActiveClick}
          handleCompletedClick={handleCompletedClick}
        />
      </Box>
    </Box>
  );
}

export default App;