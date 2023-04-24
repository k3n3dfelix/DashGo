import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Input } from "@/components/form/Input";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
  Button,
} from "@chakra-ui/react";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700"></Divider>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome Completo"></Input>
              <Input name="email" type="email" label="E-mail"></Input>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="passwword" type="password" label="Senha"></Input>
              <Input name="password_confirmation" type="password" label="Confirmação da senha"></Input>
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
