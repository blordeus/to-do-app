import { useEffect, useState } from "react";
import { Box, useColorMode } from "@chakra-ui/react";
import { v4 } from "uuid";
import lightBackgroundImage from "./images/bg-desktop-light.jpg";
import darkBackgroundImage from "./images/bg-desktop-dark.jpg";
import Header from "../components/Header";
import { InputButton } from "../components/InputButton";
import { addTodo, fetchTodos, markToDoCompleted, deleteTodo } from "./actions";
import { TodoList } from "../components/TodoList";
import { StatusBar } from "../components/StatusBar";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [itemLeft, setItemLeft] = useState(0);

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

  useEffect(() => {
    setItemLeft
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
        <Box w={{base: "80%", md: "60%", lg: "40%"}} m={"auto"} p="4em 0" >
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
          minW={"100%"}
          m={"auto"}
          position={"absolute"}
          top={"-10"}
        >
          <Box w={{base: "80%", md: "60%", lg: "40%"}} m={"auto"}>
          <Box maxH={"50vh"} overflowY={"auto"} borderTopRadius={"10px"} backgroundColor={colorMode === "light" ? "white" : "#1a202c"}>
            <TodoList
              todos={todos}
              colorMode={colorMode}
              handleCompletedTodo={handleCompletedTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          </Box>
          <StatusBar colorMode={colorMode} itemLeft={itemLeft}/>
          </Box>
     
        </Box>
      </Box>
    </>
  );
}

export default App;
