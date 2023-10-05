import { Box } from "@chakra-ui/react"

export const Circle = ({width, height}) => {
  return (
    <Box w={width} h={height} borderRadius={"50%"} border=""></Box>
  )
}
