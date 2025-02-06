import { useEffect } from "react";
import { Person } from "./Person";

export interface Person{
    name:string;
    age:number;
    isThere:boolean;
}

interface UserContextType{
    users:Person[] |null;
    addUser:(user:Person) => void;//defining fucnction inside interface
    updateUser:(id:string) => void;
    deleteUser:(id:string) =>void;
}

const contextInitial={
    users:null,
    addUser:() => null,
    updateUser: () =>null,
    deleteUser:() =>null,
};
const UserContext=createContext<UserContextType>();

interface Props{
    children:React.ReactNode;
}
export const usrProvider=(props: Props) =>{
    const [users,setusers] =useState<Person[] |null>(null)

    useEffect(() =>{
        setusers([{name:"Sayali",age:22,isThere:false}])
    },[]);

    const addUser=(user:Person) =>null
    const updateUser=(id:string) =>null
    const deleteUser=(id:string) =>null

    return <UserContext.Provider value={{users,addUser,updateUser,deleteUser}}> {props.children}</UserContext.Provider>;
}