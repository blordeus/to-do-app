import { Box, Flex } from "@chakra-ui/react"

export const TodoItem = ({todo, colorMode}) => {
  return (
    <Flex p="1.1em" h="4.4em" borderBottom="1px solid grey">
        <Flex alignItems={"center"} minW={"100%"}>
            <Box cursor={"poin"}>

            </Box>
        </Flex>
    </Flex>
  )
}
