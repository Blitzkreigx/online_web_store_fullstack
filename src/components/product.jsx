import { useReducer } from "react"
import { useParams } from "react-router-dom";

const initialState = {count: 0};
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count > 0 ? state.count - 1 : 0 };
    default:
      throw new Error();
  }
}

function Product({ updateCartCount, addToCart, cartItems, removeFromCart, products, setProducts }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams();

  const product = products.find(prod => prod.id === parseInt(id));

  if (!product) {
      return <div>Producto no encontrado</div>;
  }

  const listColors = product.colors.split(',');
  const colorElements = listColors.map(color => (
      <li key={color} className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-300 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm">
          <span className={`block h-full w-full rounded bg-${color.toLowerCase()}`}></span>
      </li>
  ));

  const listSizes = product.size.split(',');
  const sizesElements = listSizes.map(size => (
    <li key={size} className="text-heading mb-2 mr-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded border border-gray-300 p-1 text-xs font-semibold uppercase transition duration-200 ease-in-out hover:border-black md:mb-3 md:mr-3 md:h-11 md:w-11 md:text-sm ">
    {size}
    </li>
  ));

  const name = product.name.toUpperCase()

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

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
        <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
          <div className="col-span-3 grid grid-cols-2 gap-2.5">
            <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <img
                src={product.images}
                alt={product.name}
                className="w-full object-cover"
              />
            </div>
            <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <img
                src={product.images}
                alt={product.name}
                className="w-full object-cover"
              />
            </div>
            <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <img
                src={product.images}
                alt={product.name}
                className="w-full object-cover"
              />
            </div>
            <div className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <img
                src={product.images}
                alt={product.name}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="col-span-6 pt-8 lg:pt-0">
            <div className="mb-7 border-b border-gray-300 pb-7">
              <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                {name}
              </h2>
              <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                {product.description}
              </p>
              <div className="mt-5 flex items-center ">
                <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                  ${product.price}
                </div>
                {/* <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                  $199.00
                </span> */}
              </div>
            </div>
            <div className="border-b border-gray-300 pb-3  ">
              <div className="mb-4">
                <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                  Tallas
                </h3>
                <ul className="colors -mr-3 flex flex-wrap">
                  {sizesElements}
                </ul>
              </div>
              <div className="mb-4 ">
                <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                  Colores
                </h3>
                <ul className="colors -mr-3 flex flex-wrap">
                  {colorElements}
                </ul>
              </div>
            </div>
            <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
              <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
                <button
                  className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                  disabled=""
                  onClick={() => dispatch({ type: 'decrement' })}
                >
                  -
                </button>
                <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                  {state.count}
                </span>
                <button 
                  className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                  onClick={() => dispatch({ type: 'increment' })}
                >
                  +
                </button>
              </div>
              <button
                type="button"
                className="h-11 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                onClick={() => {handleClick(product.id, cartItems);}} 
              >
                Añadir al carrito
              </button>
            </div>
            <div className="shadow-sm ">
              <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                  Detalles del Productos
                </h2>
                <div className="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
                  <div className="bg-heading h-0.5 w-full rounded-sm"></div>
                  <div className="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out"></div>
                </div>
              </header>
              <div>
                <div className="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
                  {product.description}
                </div>
              </div>
            </div>
            <div className="">
              <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                  Información Adicional
                </h2>
              </header>
            </div>
            <div className="">
              <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
                <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
                  Opiniones
                </h2>
              </header>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product