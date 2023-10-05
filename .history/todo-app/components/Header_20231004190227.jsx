import { Button, Flex, Heading, Image } from "@chakra-ui/react"

import { MoonIcon } from "@chakra-ui/icons"

const Header = () => {
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
