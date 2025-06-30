import UserCard from "../userCard";
import { useState } from "react";

function UserList(props)
{

    const [users, setUsers] = useState(props.users);

    const addUser=()=>{
        console.log(users);
        users.push({id:(users.length+1).toString(), name:"New User", address:"Unknown", position:"Unknown", color:"Gray"});

        setUsers([...users]);
    }

    const clearAll=()=>{
        setUsers([]);
    }
    
    return(
        <>
            <h3>List Of Users</h3>
            {users.map((u, i)=>(<UserCard key={i} {...u}/>))}
            <hr />
            <button onClick={addUser}>Create New User</button>
            <button onClick={clearAll}>Clear all Users</button>
        </>

    )
}

export default UserList;