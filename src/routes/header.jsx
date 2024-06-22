import { Link } from 'react-router-dom';
import { useState } from 'react';
import 'boxicons';
import { useEffect } from 'react';

function Header({ cartCount, setCartCount }) {
    const [mostrarEncabezado, setMostrarEncabezado] = useState(false);
    // const [cartCount, setCartCount] = useState(0);

    const handleClickBoton = () => {
        setMostrarEncabezado(!mostrarEncabezado);
    };

    const handleCloseMenu = () => {
        setMostrarEncabezado(false);
    };

    useEffect(() => {
        const savedCartCount = localStorage.getItem('cartCount');
        if (savedCartCount) {
            setCartCount(parseInt(savedCartCount));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cartCount', cartCount.toString());
    }, [cartCount]);

    return (
        <header className='flex justify-between items-center py-5 px-10 h-[70px] box-border relative mb-10 z-[1000]'>
            <button title='Menú' className='flex justify-center items-center sm:hidden' onClick={handleClickBoton}>
                <box-icon name='menu' ></box-icon>
            </button>
            <nav className={`${mostrarEncabezado ? 'block' : 'hidden'} sm:block`}>
                <ul className='absolute top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-white flex flex-col justify-center items-center sm:bg-inherit sm:relative sm:top-0 sm:h-auto sm:w-auto sm:flex-row sm:gap-5'>
                    <li className='py-1 px-1 text-xl sm:text-md' onClick={handleCloseMenu}><Link to="/">Tienda</Link></li>
                    <li className='py-1 px-1 text-xl sm:text-md' onClick={handleCloseMenu}><Link to="acerca-de">Acerca De</Link></li>
                    <li className='py-1 px-1 text-xl sm:text-md' onClick={handleCloseMenu}><Link to="contacto">Contacto</Link></li>
                </ul>
            </nav>
            <div className='flex justify-center items-center absolute left-[50%] right-[50%] transform translate-x-1/2'>
                <Link to="/">
                    <h1 className='text-2xl'>LIFO</h1>
                </Link>
            </div>
            <div className='flex justify-center items-center gap-4'>
                <Link to="carrito" className='flex justify-center items-center' title='carrito'>
                    <box-icon name='cart' ></box-icon>
                    <span>{cartCount}</span>
                </Link>
                <Link to="perfil" className='flex justify-center items-center' title='perfil'>
                    <box-icon name='user' ></box-icon>
                </Link>
            </div>
        </header>
    );
}

export default Header;
