import { Link } from "react-router-dom"

export default function Header() {
  return (
    <>
    
    <nav>
        
        <Link to="/">Home</Link>
        <span>|</span>
        <Link to="/users">Users</Link>
        <span>|</span>
        <Link to="/like">Like</Link>
        <span>|</span>
        
    </nav>
    <Link to="/login" className="btn btn-primary">Login</Link>
    </>
  );
}