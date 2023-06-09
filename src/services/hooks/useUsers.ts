import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  created_at: string;
}

type GetUsersResponse = {
  totalCount: number;
  users: User[];
}
//export async function getUsers() : Promise<User[]>{ Para retornar a tipagem de data
export async function getUsers(page: number) : Promise<GetUsersResponse>{

  const {data, headers} = await api.get('users', {
    params: {
      page,
    }
  });

  const totalCount = Number(headers['x-total-count'])

  //const data = await response.json();

  const users = data.users.map(user => {
    return{
      id: user.id,
    name: user.name,
    email: user.email,
    createdAt: new Date(user.created_at).toLocaleDateString('pt-BR',{
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
    };
    
  });

  return {users, totalCount};
}

export function useUsers(page: number) {
  //return useQuery<User>("users", getUsers ,{ Outra opção para retornar a tipagem de data
  return useQuery(["users", page], () => getUsers(page) ,{
    staleTime: 1000  * 5,
  }); 
}