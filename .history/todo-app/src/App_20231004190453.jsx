import { useState } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import lightBackgroundImage from "./images/bg-desktop-light.jpg";
import darkBackgroundImage from "./images/bg-desktop-dark.jpg";
import Header from '../components/Header';

function App() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <>
      <Box backgroundImage={colorMode === "light" ? lightBackgroundImage : darkBackgroundImage} backgroundSize={"cover"} h={"40vh"}>
        <Box w="40%" p="4em 0" m="auto">
          <Header colorMode={colorMode} />
        </Box>
      </Box>
    </>
  )
}

export default App
