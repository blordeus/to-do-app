import { useState } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'
import lightBackgroundImage from "./images/bg-desktop-light.jpg";
import darkBackgroundImage from "./images/bg-desktop-dark.jpg";
import Header from '../components/Header';
import { InputButton } from '../components/InputButton';
import { addTodo } from './actions';

function App() {
  const {colorMode, toggleColorMode} = useColorMode();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (e) => {
    if (todo && e.keyCode === 13) {
      const newTodo = {
        id: v4(),
        title: todo,
        isCompleted: false,
      };
      addTodo     
    }
  }
 

  return (
    <>
      <Box backgroundImage={colorMode === "light" ? lightBackgroundImage : darkBackgroundImage} backgroundSize={"cover"} h={"40vh"}>
        <Box w="40%" p="4em 0" m="auto">
          <Header colorMode={colorMode} toggleColorMode={toggleColorMode}/>
          <InputButton colorMode={colorMode} todo={todo} setTodo={setTodo} addTodo={handleAddTodo}/>
        </Box>
      </Box>
    </>
  )
}

export default App
