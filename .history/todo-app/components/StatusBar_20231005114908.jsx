import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react"

export const StatusBar = ({colorMode, itemLeft}) => {
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 700) setIsMobileView(true);
            else setIsMobileView(false);
        }

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])
  return (
    <Box fontWeight={"700"} color={"grey"}>
        {isMobileView && <Flex direction={"column"}>
            <Flex h={"3em"} justifyContent={"space-between"} alignItems={"center"} p={"1.2em"} backgroundColor={colorMode === "light" ? "white" : "#1a202c"}>
            <Text>
                {itemLeft} {itemLeft > 1 ? "items" : "item"} left 
                </Text>
                <Tex
            </Flex>
            </Flex>}
    </Box>
  )
}
