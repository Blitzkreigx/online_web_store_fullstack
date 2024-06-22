function AcercaDe() {
    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-3 fullScreen">
                <div className="flex justify-center items-center">
                    <img src="/sobre-image.jpg" alt="#" className="w-[90%] p-5" />
                </div>
                <div className="col-span-2 px-5 flex flex-col justify-center">
                    <h2 className="text-3xl my-8 text-[#57707A]">Creamos y Ofecemos Elegancia!</h2>
                    <p className="text-lg">LIFO es la marca de ropa que te hará lucir elegante y casual al mismo tiempo. Nuestras prendas están diseñadas para que te sientas cómodo en todo momento, sin importar si hace frío o calor.</p>
                    <p className="text-lg text-[191D23]"><strong>¿Quieres saber más?</strong></p>
                    <p>¡Tenemos una amplia variedad de prendas que se adaptan a cualquier estilo! Desde pantalones y camisas hasta vestidos y chaquetas, ¡todo lo que necesitas para lucir increíble! Además, nuestras prendas están confeccionadas con los mejores materiales, lo que garantiza su durabilidad y calidad. ¡No esperes más para lucir como siempre has querido!</p>
                </div>
            </section>
        </>
    )
}

export default AcercaDe