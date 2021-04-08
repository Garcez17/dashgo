import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box
        mr="4"
        textAlign="right"
      >
        <Text>Gabriel Garcez</Text>
        
        <Text color="gray.300" fontSize="small">
          ggarcez613@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Gabriel Garcez" src="https://github.com/garcez17.png" />
    </Flex>
  )
}