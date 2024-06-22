function Car({ cartItems, removeFromCart }) {
  const totalAmount = cartItems.reduce((total, item) => total + Number(item.price), 0);

  return (
    <>
          <div className="mx-auto my-4 max-w-4xl md:my-6">
            <div className="overflow-hidden  rounded-xl shadow">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="px-5 py-6 text-gray-900 md:px-8">
                  <div className="flow-root">
                    <div className="-my-6 divide-y divide-gray-200">
                      <div className="py-6">
                        <form>
                          <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                            <div>
                              <h3
                                id="contact-info-heading"
                                className="text-lg font-semibold text-gray-900"
                              >
                                Información de Contacto
                              </h3>
                              <div className="mt-4 w-full">
                                <label
                                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  for="name"
                                >
                                  Nombre completo
                                </label>
                                <input
                                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                  type="text"
                                  placeholder="Ingresa tu nombre"
                                  id="name"
                                />
                              </div>
                            </div>
                            <hr className="my-8" />
                            <div className="mt-10">
                              <h3 className="text-lg font-semibold text-gray-900">
                                Detalles de Pago
                              </h3>
                              <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                                <div className="col-span-3 sm:col-span-4">
                                  <label
                                    for="cardNum"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Número de targeta
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                      type="text"
                                      placeholder="1234 1234 1234 1234"
                                      id="cardNum"
                                    />
                                  </div>
                                </div>
                                <div className="col-span-2 sm:col-span-3">
                                  <label
                                    for="expiration-date"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Expiración (MM/YY)
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="date"
                                      name="expiration-date"
                                      id="expiration-date"
                                      autoComplete="cc-exp"
                                      className="block h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label
                                    for="cvc"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    CVC
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      name="cvc"
                                      id="cvc"
                                      autoComplete="csc"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr className="my-8" />
                            <div className="mt-10">
                              <h3 className="text-lg font-semibold text-gray-900">
                                Dirección de envío
                              </h3>
                              <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                                <div className="sm:col-span-3">
                                  <label
                                    for="address"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Dirección
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      id="address"
                                      name="address"
                                      autoComplete="street-address"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label
                                    for="city"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Ciudad
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      id="city"
                                      name="city"
                                      autoComplete="address-level2"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label
                                    for="region"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Estado / Provincia
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      id="region"
                                      name="region"
                                      autoComplete="address-level1"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label
                                    for="postal-code"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Código Postal
                                  </label>
                                  <div className="mt-1">
                                    <input
                                      type="text"
                                      id="postal-code"
                                      name="postal-code"
                                      autoComplete="postal-code"
                                      className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <hr className="my-8" />
                            <div className="mt-10 flex justify-end pt-6">
                              <button
                                type="button"
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                              >
                                Realizar pago
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 px-5 py-6 md:px-8">
                <div className="flow-root mt-2">
                    <ul className="-my-7 divide-y divide-gray-200">
                        {cartItems.map((item, id) => (
                            <li key={id} className="flex items-stretch justify-between space-x-5 py-7">
                                <div class="flex flex-1 items-stretch">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="h-20 w-20 rounded-lg border border-gray-200 bg-white object-contain"
                                            src={item.images}
                                            alt={item.name}
                                        />
                                    </div>
                                    <div class="ml-5 flex flex-col justify-between">
                                        <div class="flex-1">
                                            <p class="text-sm font-bold">{item.name}</p>
                                            {/* <p class="mt-1.5 text-sm font-medium text-gray-500">
                                                Orange
                                            </p> */}
                                        </div>
                                        {/* <p class="mt-4 text-xs font-medium ">x1</p> */}
                                    </div>
                                </div>
                                <div class="ml-auto flex flex-col items-end justify-between">
                                    <p class="text-right text-sm font-bold text-gray-900">
                                        $ {item.price}
                                    </p>
                                    <button
                                      type="button"
                                      onClick={() => removeFromCart(item.id)}
                                      class="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                      <span class="sr-only">Remove</span>
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          stroke-width="2"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          class="h-5 w-5"
                                      >
                                          <line x1="18" y1="6" x2="6" y2="18"></line>
                                          <line x1="6" y1="6" x2="18" y2="18"></line>
                                      </svg>
                                  </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                  <hr className="mt-6 border-gray-200" />
                  <form action="#" className="mt-6">
                    <div className="sm:flex sm:space-x-2.5 md:flex-col md:space-x-0 lg:flex-row lg:space-x-2.5">
                      <div className="flex-grow">
                        <input
                          className="flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          type="text"
                          placeholder="Ingresa el código del cupón"
                        />
                      </div>
                      <div className="mt-4 sm:mt-0 md:mt-4 lg:mt-0">
                        <button
                          type="button"
                          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        >
                          Aplicar Cupón
                        </button>
                      </div>
                    </div>
                  </form>
                  <ul className="mt-6 space-y-3">
                    <li className="flex items-center justify-between text-gray-600">
                        <p className="text-sm font-medium">Sub total</p>
                        <p className="text-sm font-medium">$ {totalAmount.toFixed(2)}</p>
                    </li>
                    <li className="flex items-center justify-between text-gray-900">
                        <p className="text-sm font-medium">Total</p>
                        <p className="text-sm font-bold">$ {totalAmount.toFixed(2)}</p>
                    </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Car