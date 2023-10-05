import { useState } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import lightBackgroundImage from "./images/bg-desktop-light";
import darkBackgroundImage from "./images/bg-desktop-dark";

function App() {
  const [count, setCount] = useState(0)

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Box backgroundImage={colorMode === "light" ? lightBackgroundImage : dar}>

      </Box>
    </>
  )
}

export default App
