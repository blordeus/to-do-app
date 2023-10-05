import { useState } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'

import lightBackgroundImage from "./images/bg-desktop-light";
import darkBackgroundImage from "./images/"

function App() {
  const [count, setCount] = useState(0)

  const {colorMode, toggleColorMode} = useColorMode()

  return (
    <>
      <Box backgroundImage={colorMode === "light" ? }>

      </Box>
    </>
  )
}

export default App
