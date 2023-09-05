// Make a component for Header and Main
import { Link } from "react-router-dom"

function Header(props) {
    return (
      <div className="header">
        <Link to="/">
              {/* <img className="rhombus-icon" src=""></img> */}
              <h1 className="app-name">Rhombus Logo Here</h1>
        </Link>
      </div>
    )
  }
  
  export default Header