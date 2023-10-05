import { Box } from "@chakra-ui/react"

export const Circle = ({width, height}) => {
  return (
    <Box w={width} h={height} borderRadius={"50%"} border=".1em solid gray"></Box>
  )
}
