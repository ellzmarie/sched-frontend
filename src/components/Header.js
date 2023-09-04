// Make a component for Header and Main
import { Link } from "react-router-dom"

function Header(props) {
    return (
      <nav className="nav">
        <Link to="/">
          <div>Contact App</div>
        </Link>
      </nav>
    )
  }
  
  export default Component