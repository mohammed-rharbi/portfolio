
import Icon from './ui/icon';

function Navbar() {
  return (
    

    <nav id="menu">
        <div class="menu-item">
            <div class="menu-text">
                <a href="#">Projects</a>
            </div>  
        </div>
        <div class="menu-item highlight">
            <div class="menu-text">
                <a href="#">Services</a>
            </div>
        </div>  
        <div class="menu-item highlight">
            <div class="menu-text">
                <a href="#">About Me</a>
            </div>
        </div>
        <div class="menu-item">
            <div class="menu-text">
                <a href="#">Contact Me</a>
            </div>
        </div>
    </nav>
  )
}




export default Navbar;