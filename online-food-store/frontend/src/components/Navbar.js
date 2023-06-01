import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    return (
        <div className='nav'>
            <nav className='container d-flex justify-content-between align-items-center'>
                <div className='img-logo'>
                    <img src={logo} alt='Na yaar' />
                </div>
                <div>
                    <ul className='d-flex'>
                        <li>
                            <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Signup'>Signup</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Login'>Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;