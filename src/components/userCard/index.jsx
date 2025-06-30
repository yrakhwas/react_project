import "./style.css";

// function UserCard(props){
    
//     // const user = {
//     //     name: props.name,
//     //     adress: props.adress,
//     //     position: props.position,
//     //     color: props.color || "blue"
//     // }

//     let { name, adress, position, color} = props;
//     color = color || "pink";
//     return (
//         <div className="user-card" style={{backgroundColor: color || "blue"}}>
//             <h3>User Card</h3>
//             <p>Name : {name}</p>
//             <p>Adress : {adress}</p>
//             <p>Position : {position}</p>
//         </div>
//     )
// }

function UserCard({name, address, position, color}){

    return (
        <div className="user-card" style={{backgroundColor: color || "blue"}}>
            <h3>User Card</h3>
            <p>Name : {name}</p>
            <p>Adress : {address}</p>
            <p>Position : {position}</p>
        </div>
    )
}


export default UserCard;