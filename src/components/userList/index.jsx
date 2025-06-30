import UserCard from "../userCard";

function UserList({users})
{
    

    return(
        <>
            <h3>List Of Users</h3>
            {users.map(u=>(<UserCard {...u}/>))}
        </>

    )
}

export default UserList;