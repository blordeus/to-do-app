import { Box, Flex, Image } from "@chakra-ui/react"
import { useState } from "react"

import checkIcon from 

export const TodoItem = ({todo, colorMode}) => {
    const [isCompleted, setIsCompleted] = useState(false);
  return (
    <Flex p="1.1em" h="4.4em" borderBottom="1px solid grey">
        <Flex alignItems={"center"} minW={"100%"}>
            <Box cursor={"pointer"}>
                {isCompleted ? (
                    <Flex w="24px" h="24px" borderRadius={"50%"} alignItems={"center"} justifyContent={"center"} background={"linear-gradient(90deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"}>
                        <Image />    
                    </Flex>
                )}
            </Box>
        </Flex>
    </Flex>
  )
}
