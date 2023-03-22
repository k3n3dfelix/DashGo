import { Inter } from 'next/font/google'
import { Flex, Button, Stack, FormLabel } from '@chakra-ui/react';
import { Input } from '@/components/form/Input';


const inter = Inter({ subsets: ['latin'] })

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column">
        <Stack spacing={4}>
          <Input type="email" label="E-mail" name="email"/>
          <Input type="passsword" label="Senha" name="password" />
         </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
