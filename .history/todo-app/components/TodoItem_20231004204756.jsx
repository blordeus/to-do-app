import { Box, Flex } from "@chakra-ui/react"
import { useState } from "react"

export const TodoItem = ({todo, colorMode}) => {
    const [isCompleted, setIsCompleted] = useState
  return (
    <Flex p="1.1em" h="4.4em" borderBottom="1px solid grey">
        <Flex alignItems={"center"} minW={"100%"}>
            <Box cursor={"pointer"}>

            </Box>
        </Flex>
    </Flex>
  )
}
