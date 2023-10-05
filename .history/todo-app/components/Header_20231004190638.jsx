import { Button, Flex, Heading, Image } from "@chakra-ui/react"

import moonIcon from "../src/images/icon-moon.svg";
import sunIcon from "../src/images/icon-sun.svg";
const Header = ({colorMode, toggleColorMode}) => {
  return (
    <Flex justifyContent={"space-between"}>
      <Heading as="h2" size="xl" color="white" letterSpacing={".5em"}>TODO</Heading>
      <Button variant={"ghost"} onClick={toggleColorMode}>
        <Image src={colorMode === "light" ? moonIcon : sunIcon/>
      </Button>
    </Flex>
  )
}

export default Header
