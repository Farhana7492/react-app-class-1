import { useParams } from 'react-router-dom'
import Data from "../data.json";


function UserProfile() {
    const params = useParams<{ id: string }>();
    const user = Data.find((item)=>item.id === Number(params.id!));
  return (
    <>
    
    <div>
      <h1>User Profile {params.id}</h1>
      {user ? (
        <div>
          <h2>{user?.name}</h2>
          <p>Email: {user?.email}</p>
          <p>Round: {user?.round}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
    
    </>
  )
}

export default UserProfile
