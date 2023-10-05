import { Button, Flex, Heading, Image } from "@chakra-ui/react"

import moonIcon from "../src/images/icon-moon.svg";
import sunIcon from "../src/images/icon-sun.svg";
const Header = ({colorMode}) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Heading as="h2" size="xl" color="white" letterSpacing={".5em"}>TODO</Heading>
      <Button variant={"ghost"} onClick={}>
        <Image />
      </Button>
    </Flex>
  )
}

export default Header
