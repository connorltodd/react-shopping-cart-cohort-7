import { Link } from 'react-router-dom';
import productSearch from '../Assets/search-button.png';

export default function Navbar () {
    return (
        <div>
            <div>
                <Link to='/' >
                    <button className='navbar-title'>Fake Store</button>
                </Link>
                <ul>
                    <li>Men's</li>
                    <li>Women's</li>
                    <li>Children</li>
                    <li>Sport</li>
                </ul>
            </div>
            <div>
                <div>
                    <input />
                    <button>
                        <img src={productSearch} />
                    </button>
                </div>
                <Link to='/cart' >
                    <button>View Cart</button>
                </Link>
                <Link to='/contact' >
                    <button>Contact us</button>
                </Link>
            </div>
        </div>
    )
}