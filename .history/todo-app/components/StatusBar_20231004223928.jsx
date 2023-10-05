import { Box, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react"

export const StatusBar = () => {
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
            <Flex h={}>

            </Flex>
            </Flex>}
    </Box>
  )
}
