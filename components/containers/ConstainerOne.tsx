import Image from "next/image"

export default function ContainerOne() {
    return (
        <section id="abra-sua-conta" className="md:col-span-12 col-span-4">
            <div
                    className={`
                        min-h-[calc(100vh-5rem)]

                        grid sm:grid-cols-6 
                        sm:gap-x-8 gap-y-6
                        sm:px-12 py-6
                        gap-x-2 grid-cols-4 px-6


                        desktop:grid-cols-12
                        
                    `}
                >
                    <Image
                        alt="Imagem de um app"
                        src="/app.png"
                        height={600}
                        width={280}
                        className={`
                            object-cover
                            max-h-[600px]
                            desktop:block hidden
                            col-span-5 m-auto
                        `}
                    />
                    <Image
                        alt="Imagem de um app"
                        src="/5.jpg"
                        height={600}
                        width={800}
                        className={`
                            object-cover
                            max-h-[600px]
                            w-full
                            desktop:hidden
                            sm:col-span-6 col-span-4
                        `}
                    />
                    <div
                        className={`
                            flex flex-col items-start justify-center
                            gap-6 sm:gap-8 w-full
                            sm:col-span-6 col-span-4 desktop:col-span-7
                        `}
                    >
                        <h3
                            className={`
                            text-4xl font-bold
                            text-irish-coffee-900
                            neulisTitle
                        `}
                        >
                            Abra sua conta{" "}
                            <span className="text-secondary-500">gratuita</span>!
                        </h3>
                        <p
                            className={`
                            text-base desktop:text-2xl font-normal
                            text-irish-coffee-900
            
                        `}
                        >
                            O <span className="neulis font-bold">xịs</span> é um
                            banco digital que te dá o controle da sua vida
                            financeira. Gerencie suas contas, faça Pix, TEDs e
                            transferências para todos os bancos sem pagar nada.
                        </p>
                        <div
                            className={`
                            flex flex-row items-center justify-start
                            flex-wrap
                            gap-4
                            mt-
                        `}
                        >
                            <div
                                className={`
                                    col-span-2 row-span-2
                                    flex flex-row items-center justify-center
                                    bg-secondary-300 bg-opacity-50
                                    text-irish-coffee-900
                                    rounded-full
                                    p-3 text-sm md:text-base md:p-4
                                `}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                    />
                                </svg>
                                <span className="ml-2">Sem taxas absurdas</span>
                            </div>
                            <div
                                className={`
                                    col-span-2 row-span-2
                                    flex flex-row items-center justify-center
                                    bg-secondary-300 bg-opacity-50
                                    text-irish-coffee-900
                                    rounded-full
                                    
                                    p-3 text-sm md:text-base md:p-4
                                `}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                    />
                                </svg>
                                <span className="ml-2">Pix parcelado</span>
                            </div>
                            <div
                                className={`
                                    col-span-2 row-span-2
                                    flex flex-row items-center justify-center
                                    bg-secondary-300 bg-opacity-50
                                    text-irish-coffee-900
                                    rounded-full
                                    
                                    p-3 text-sm md:text-base md:p-4
                                `}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                    />
                                </svg>
                                <span className="ml-2">100% pensando em você</span>
                            </div>
                            <div
                                className={`
                                    col-span-2 row-span-2
                                    flex flex-row items-center justify-center
                                    bg-secondary-300 bg-opacity-50
                                    text-irish-coffee-900
                                    rounded-full
                                    
                                    p-3 text-sm md:text-base md:p-4
                                `}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                    />
                                </svg>
                                <span className="ml-2">
                                    Pagamentos em todo o mundo
                                </span>
                            </div>
                            <div
                                className={`
                                    col-span-2 row-span-2
                                    flex flex-row items-center justify-center
                                    bg-secondary-300 bg-opacity-50
                                    text-irish-coffee-900
                                    rounded-full
                                    
                                    p-3 text-sm md:text-base md:p-4
                                `}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m4.5 12.75 6 6 9-13.5"
                                    />
                                </svg>
                                <span className="ml-2">
                                    Parcelamento facilitado
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}