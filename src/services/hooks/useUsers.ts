import { useQuery } from "react-query";
import { api } from "../api";

type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}
//export async function getUsers() : Promise<User[]>{ Para retornar a tipagem de data
export async function getUsers() : Promise<User[]>{

  const {data} = await api.get("users");
  //const data = await response.json();

  const users = data.users.map(user => {
    return{
      id: user.id,
    name: user.name,
    email: user.email.email,
    createdAt: new Date(user.createdAt.createdAt).toLocaleDateString('pt-BR',{
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
    };
    
  });

  return users;
}

export function useUsers() {
  //return useQuery<User>("users", getUsers ,{ Outra opção para retornar a tipagem de data
  return useQuery("users", getUsers ,{
    staleTime: 1000  * 5,
  }); 
}