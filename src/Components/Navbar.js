import { Link } from 'react-router-dom';

export default function Navbar () {
    return (
        <div>
            <p>Navbar</p>
            <Link to='/' >
                <button>Home</button>
            </Link>
            <Link to='/cart' >
                <button>View Cart</button>
            </Link>
            <Link to='/contact' >
                <button>Contact us</button>
            </Link>
        </div>
    )
}