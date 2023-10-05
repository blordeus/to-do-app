import { useState } from 'react'
import { Box, useColorMode } from '@chakra-ui/react'



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
