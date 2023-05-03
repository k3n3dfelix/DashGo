import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from "next/link";
import { useMutation } from 'react-query';
import * as yup from 'yup';

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
import { api } from '@/services/api';
import { queryClient } from '@/services/queryClient';
import { useRouter } from 'next/router';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email("Entre com um e-mail válido"),
  password: yup.string().required('Senha obrigatória').min(6, "No mínimo 6 caracteres"),
  password_confirmation: yup.string(),
})

export default function CreateUser() {
  const router = useRouter()
  const createUSer = useMutation(async (user: CreateUserFormData) => {
    const response = await api.post('users',{
      user: {
        ...user,
        created_at: new Date(),
      }
    })

    return response.data.user;
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries('users')
    }
  })

  const {register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema)
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    // console.log(values);

    await createUSer.mutateAsync(values);

    router.push('/users')
  }
  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box as="form" flex="1" borderRadius={8} bg="gray.800" p={["6","8"]} onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size="lg" fontWeight="normal">Criar Usuário</Heading>

          <Divider my="6" borderColor="gray.700"></Divider>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="name"  type="text" label="Nome Completo" error={errors.name} {...register('name')}></Input>
              <Input name="email" type="email" label="E-mail" error={errors.email} {...register('email')}></Input>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6","8"]} w="100%">
              <Input name="password" type="password" label="Senha" error={errors.passwword} {...register('password')}></Input>
              <Input name="password_confirmation" type="password" label="Confirmação da senha" error={errors.password_confirmation} {...register('password_confirmation')}></Input>
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
            <Link href="/users">
              <Button  as="a" colorScheme="whiteAlpha">Cancelar</Button>
            </Link>
              <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
