import { useState } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import lightBackgroundImage from "./images/bg-desktop-light.jpg";
import darkBackgroundImage from "./images/bg-desktop-dark.jpg";

function App() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <>
      <Box backgroundImage={colorMode === "light" ? lightBackgroundImage : darkBackgroundImage} backgroundSize={"cover"} h={"40vh"}>
        <Box>
          <h1>Todo App</h1>
          <button onClick={toggleColorMode}>Toggle Color Mode</button>
          <hr />
          
        </Box>
      </Box>
    </>
  )
}

export default App
