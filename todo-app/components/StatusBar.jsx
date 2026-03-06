import { Box, Flex, Text } from "@chakra-ui/react";
import { useBreakpointValue } from "@chakra-ui/react";

export const StatusBar = ({
  colorMode,
  itemLeft,
  handleClearAllClick,
  handleAllClick,
  handleActiveClick,
  handleCompletedClick,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const bg = colorMode === "light" ? "white" : "#1a202c";
  const hoverColor = colorMode === "light" ? "black" : "white";

  const filterButtons = (
    <Flex gap={"1em"} justifyContent={"center"} alignItems={"center"}>
      <Text
        onClick={handleAllClick}
        cursor={"pointer"}
        _hover={{ color: hoverColor }}
        _active={{ color: "hsl(220, 98%, 61%)" }}
      >
        All
      </Text>
      <Text
        onClick={handleActiveClick}
        cursor={"pointer"}
        _hover={{ color: hoverColor }}
        _active={{ color: "hsl(220, 98%, 61%)" }}
      >
        Active
      </Text>
      <Text
        onClick={handleCompletedClick}
        cursor={"pointer"}
        _hover={{ color: hoverColor }}
        _active={{ color: "hsl(220, 98%, 61%)" }}
      >
        Completed
      </Text>
    </Flex>
  );

  return (
    <Box fontWeight={"700"} color={"grey"}>
      {/* Bottom bar: items left + clear (always visible) */}
      <Flex
        h={"3em"}
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"1.2em"}
        backgroundColor={bg}
        borderBottomRadius={isMobile ? "0" : "10px"}
      >
        <Text>
          {itemLeft} {itemLeft === 1 ? "item" : "items"} left
        </Text>

        {/* Desktop: filters inline */}
        {!isMobile && filterButtons}

        <Text
          onClick={handleClearAllClick}
          cursor={"pointer"}
          _hover={{ color: hoverColor }}
        >
          Clear Completed
        </Text>
      </Flex>

      {/* Mobile: filters in their own attached row */}
      {isMobile && (
        <Flex
          h={"3em"}
          justifyContent={"center"}
          alignItems={"center"}
          borderBottomRadius={"10px"}
          backgroundColor={bg}
          borderTop={`1px solid ${colorMode === "light" ? "hsl(0,0%,90%)" : "hsl(235,24%,19%)"}`}
        >
          {filterButtons}
        </Flex>
      )}
    </Box>
  );
};