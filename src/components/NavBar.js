import {Link} from 'react-router-dom'
const NavBar = () => {
    return ( 
        <div>
            <ul>
                <Link to='/posts'><li>API CALL</li></Link>
                <br />
            </ul>
        </div>
     );
}
 
export default NavBar;