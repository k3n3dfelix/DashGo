import { Flex, Button, Stack, FormLabel } from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '@/components/form/Input';

type SignFormData = {
  email: string;
  password: string;
}

export default function SignIn() {

  const {register, handleSubmit, formState } = useForm();

  const handleSign: SubmitHandler<SignFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }
  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex as="form" width="100%" maxWidth={360} bg="gray.800" p="8" borderRadius={8} flexDir="column" onSubmit={handleSubmit(handleSign)}>
        <Stack spacing={4}>
          <Input type="email" label="E-mail" name="email" {...register('email')}/>
          <Input type="passsword" label="Senha" name="password"  {...register('password')}/>
         </Stack>
        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}
