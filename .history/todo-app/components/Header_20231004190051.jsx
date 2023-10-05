import { Flex, Heading } from "@chakra-ui/react"
const Header = () => {
  return (
    <Flex justifyContent={"space-between"}>
      <Heading as="h2" size="xl" color="white" letterSpacing={".5em"}>TODO</Heading>
      
    </Flex>
  )
}

export default Header
