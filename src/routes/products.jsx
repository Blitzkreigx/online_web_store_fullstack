import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters"

function Products({ updateCartCount, addToCart, cartItems, removeFromCart, products, setProducts }) {
    const [filter, setFilter] = useState('todos');
    const productsFilters = filter === 'todos' ? products : products.filter((product)=>product.category === filter);

    const handleClick = (productId) => {
        setProducts(prevProducts => {
            return prevProducts.map(product => {
                if (product.id === productId) {
                    const isInCart = cartItems && cartItems.some(item => item.id === productId);
                    if (isInCart) {
                        removeFromCart(productId);
                        updateCartCount(prevCount => Math.max(0, prevCount - 1));
                    } else {
                        addToCart(product);
                        updateCartCount(prevCount => prevCount + 1);
                    }
                    return { ...product };
                }
                return product;
            });
        });
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    useEffect(() => {
        const savedFilter = localStorage.getItem('filter');
        if (savedFilter) {
            setFilter(savedFilter);
        }
    }, []);
    
    useEffect(() => {
        if (Array.isArray(products)) {
            products.forEach(product => {
                const isClicked = localStorage.getItem(`merchant_${product.id}_clicked`);
                if (isClicked) {
                    setProducts(prevMerchants => prevMerchants.map(m => {
                        if (m.id === product.id) {
                            return { ...m, isClicked: isClicked === 'true' };
                        }
                        return m;
                    }));
                }
            });
        }
    }, []);    

    return (
        <>
            <section>
                <Filters onFilterChange={handleFilterChange} />

                <ul className="flex flex-wrap justify-center items-center px-12 sm:justify-between gap-5">
                    {productsFilters.map(product => (
                        <li key={product.id} className="flex flex-row overflow-hidden w-[450px] max-w-[500px] max-h-[250px] my-5 md:flex-col md:w-[250px] md:max-w-[250px] md:h-[400px] md:max-h-[450px]">
                            <Link to={`product/${product.id}`} >
                                <div className="w-[200px] h-full overflow-hidden md:max-w-[90%] md:mx-auto md:h-[250px]">
                                    <img src={product.images} alt={product.name} className="md:mx-auto" />
                                </div>
                            </Link>
                            <div className="mt-5 p-[5px]">
                                <h3 className="text-xl cursor-default"><b>{product.name}</b></h3>
                                <p className="text-gray-600 cursor-default">${product.price}</p>
                                <button 
                                    onClick={() => {handleClick(product.id, cartItems);}} 
                                    className="bg-gray-300 shadow-gray-500 shadow-md px-2 py-1 rounded-full flex justify-center items-center mt-[10px] hover:bg-gray-400">
                                    <small>
                                        {cartItems.some(item => item.id === product.id) ? 'Añadido' : 'Agregar al carrito'}
                                    </small>
                                </button>

                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Products;
