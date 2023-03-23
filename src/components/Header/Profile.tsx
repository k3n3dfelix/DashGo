import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Kened Felix</Text>
            <Text color="gray.300" fontSize="small">kened.felix@gmail.com.com</Text>
          </Box>

          <Avatar size="md" name="Diego Fernandes" src="https://github.com/k3n3dfelix.png"/>
        </Flex>
  );
}