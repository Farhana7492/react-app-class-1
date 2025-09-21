import { Link } from "react-router-dom";
import Users from "../data.json";

function UsersComponent() {
    return(
        <>
        <h1>Users List</h1>
        <div className="container">
            {Users.map(user => (
                <ul key={user.id}>
                    <Link to={`/user/${user.id}`}>
                        <li>{user.name}</li>
                    </Link>
                </ul>
            ))}
        </div>
            </>
    );
}
export default UsersComponent;