import { Flex, Input, InputGroup, InputLeftElement, IconButton } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { Circle } from "./Circle";

export const InputButton = ({ colorMode, todo, setTodo, addTodo, handleKeyDown }) => {
  return (
    <Flex
      m="2.5em 0"
      background={colorMode === "light" ? "white" : "#1a202c"}
      p="2"
      borderRadius={"0.5em"}
      align="center"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents={"none"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          h={"100%"}
        >
          <Circle width={"22px"} height={"22px"} />
        </InputLeftElement>

        <Input
          fontWeight={"700"}
          fontSize={"1.2em"}
          type="text"
          h="3em"
          variant={"unstyled"}
          placeholder="Create a new todo..."
          ml={".5em"}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>

      <IconButton
        aria-label="Add todo"
        icon={<AddIcon />}
        onClick={() => addTodo()}
        size="sm"
        variant="ghost"
        colorScheme={colorMode === "light" ? "gray" : "whiteAlpha"}
        ml={2}
        flexShrink={0}
      />
    </Flex>
  );
};