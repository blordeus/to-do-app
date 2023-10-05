import { Flex, InputGroup, InputLeftElement } from "@chakra-ui/react"

export const InputButton = ({colorMode}) => {
  return (
    <Flex m="2.5em 0" background={colorMode === "light" ? "white" : "#1a202c"} p="2" borderRadius={"0.5em"}>
        <InputGroup>
         <InputLeftElement pointerEvents={"none"} display={"flex"} justifyContent={"center"} alignItems={"center"} h>
         </InputLeftElement>
        </InputGroup>
    </Flex>
  )
}
