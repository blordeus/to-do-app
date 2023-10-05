import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { useState } from "react"

import checkIcon from '../src/images/icon-check.svg'
import { Circle } from "./Circle";

export const TodoItem = ({todo, colorMode}) => {
    const [isCompleted, setIsCompleted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
  return (
    <Flex p="1.1em" h="4.4em" borderBottom="1px solid grey">
        <Flex alignItems={"center"} minW={"100%"}>
            <Box cursor={"pointer"}>
                {isCompleted ? (
                    <Flex w="24px" h="24px" borderRadius={"50%"} alignItems={"center"} justifyContent={"center"} background={"linear-gradient(90deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"}>
                        <Image src={checkIcon}/>    
                    </Flex>
                ) : <Circle width={"22px"} height={"22px"}/>}
            </Box>
            <Flex ml={"1em"} justifyContent={"space-between"} w="100%">
                <Text fontWeight={"700"} fontSize={"1.2rem"} textDecoration={isCompleted ? "line-through" : "none"} color={isCompleted ? "grey" : colorMode === "light" ? "black" : "white"}>{todo.title}</Text> 
                {isVisible && <Box}       
            </Flex>
        </Flex>
    </Flex>
  )
}
