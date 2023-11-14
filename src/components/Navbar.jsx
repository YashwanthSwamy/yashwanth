import { NavLink, Link } from 'react-router-dom';
import resume from '../assets/Yashwanth_Resume.pdf';

const Navbar = () => {
    return (
        <header className='header'>
            <NavLink to='/' className='w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md'>
                <p className='blue-gradient_text font-Mr_De_Haviland font-semibold text-2xl pb-2' >ys</p>
            </NavLink>
            <nav className='flex lg:text-lg sm:text-sm gap-4  pl-2'>
                <NavLink to='/about'  className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                    About
                </NavLink>
                <NavLink to='/projects'  className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                    Projects
                </NavLink>
                <NavLink to='/contact'  className={({isActive}) => isActive ? 'text-blue-500' : 'text-black'}>
                    Contact
                </NavLink>
                <button className=''>
                    <Link to={resume} target="_blank" rel="noopener noreferrer" >Resume</Link>
                </button>
            </nav>
        </header>
    )
}

export default Navbar;