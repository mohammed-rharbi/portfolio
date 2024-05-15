import { Link } from 'react-router-dom';  
import Icon from './ui/icon';

function Navbar() {
  return (
    

    <nav id="menu">

    <div class="menu-item highlight">
            <div class="menu-text">
            <Link className="font-medium" to={'/'}>
              Home
            </Link>
            </div>
        </div> 
        <div class="menu-item">
            <div class="menu-text">
            <Link className="font-medium" to={'#'}>
              Projects
            </Link>          
        </div>  
        </div> 
        <div class="menu-item highlight">
            <div class="menu-text"> 
            <Link className="font-medium" to={'#'}>
              pro
            </Link>
            </div>
        </div>
        <div class="menu-item">
            <div class="menu-text">
            <Link className="font-medium" to={'/contact'}>
              Contact Me
            </Link></div>
        </div>
    </nav>
  )
}




export default Navbar;