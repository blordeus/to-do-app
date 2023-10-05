import { useEffect, useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { v4 } from "uuid";
import lightBackgroundImage from "./images/bg-desktop-light.jpg";
import darkBackgroundImage from "./images/bg-desktop-dark.jpg";
import Header from "../components/Header";
import { InputButton } from "../components/InputButton";
import { addTodo, fetchTodos, markToDoCompleted, deleteTodo } from "./actions";
import { TodoList } from "../components/TodoList";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = async (e) => {
    if (todo && e.keyCode == 13) {
      const newTodo = {
        id: v4(),
        title: todo,
        isCompleted: false,
      };
      await addTodo(newTodo);
      setTodos(await fetchTodos());
      setTodo("");
    }
  };

  const handleCompletedTodo = async (id) => {
    await markToDoCompleted(id);
  };

  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    setTodos(await fetchTodos());
  };

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  return (
    <>
      <Box
        backgroundImage={
          colorMode === "light" ? lightBackgroundImage : darkBackgroundImage
        }
        backgroundSize={"cover"}
        h={"40vh"}
      >
        <Box w="50%" p="4em 0" m="auto">
          <Header colorMode={colorMode} toggleColorMode={toggleColorMode} />
          <InputButton
            colorMode={colorMode}
            todo={todo}
            setTodo={setTodo}
            addTodo={handleAddTodo}
          />
        </Box>
      </Box>
      <Box
        h={"60vh"}
        backgroundSize={"cover"}
        background={"#242424"}
        position={"relative"}
      >
        <Box
          maxWw={"100%"}
          position={"absolute"}
          top={"-10"}
          background={colorMode === "light" ? "white" : "#1a202c"}
        >
          <Box w={{base: "78%", md: "60%", lg: "40%"}} m={"auto"}>

          </Box>
          <Box maxH={"50vh"} overflowY={"auto"} borderTopRadius={"10px"} backgroundColor={colorMode ==}>
            <TodoList
              todos={todos}
              colorMode={colorMode}
              handleCompletedTodo={handleCompletedTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
