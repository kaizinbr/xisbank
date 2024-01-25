import Image from "next/image"

export default function ContainerFour() {
    return (
        <section id="cartao" className="md:col-span-12 col-span-4">
            <div
                className={`
                    min-h-[calc(100vh-5rem)]
                    bg-secondary-300/40
                    grid sm:grid-cols-6 
                    sm:gap-x-8 gap-y-6
                    sm:px-12 py-6
                    gap-x-2 grid-cols-4 px-6
                    justify-items-center
                    desktop:grid-cols-12
                `}
            >
                <div
                    className={`
                        flex flex-col items-start justify-center
                        gap-8 col-span-6
                    `}
                >
                    <h3
                        className={`
                        text-4xl font-bold
                        text-irish-coffee-900
                        neulisTitle
                    `}
                    >
                        Vantagens{" "}
                        <span className="text-secondary-500">infinitas</span>{" "}
                        para você!
                    </h3>
                    <div className="flex flex-row gap-8 flex-wrap w-full justify-center text-parchment-100 text-center">
                        <div
                            className={`
                            w-5/12 p-6 rounded-xl
                            flex flex-col items-center justify-center
                            bg-secondary-400
                        `}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"
                                />
                            </svg>
                            <span className="font-bold text-lg">
                                Faça viagens
                            </span>
                        </div>
                        <div
                            className={`
                            w-5/12 p-6 rounded-xl
                            flex flex-col items-center justify-center
                            bg-secondary-400 
                        `}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
                                />
                            </svg>

                            <span className="font-bold text-lg">
                                Viva a arte
                            </span>
                        </div>
                        <div
                            className={`
                             w-5/12 p-6 rounded-xl
                            flex flex-col items-center justify-center
                            bg-secondary-400
                        `}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                                />
                            </svg>

                            <span className="font-bold text-lg">
                                Aproveite compras
                            </span>
                        </div>
                        <div
                            className={`
                            w-5/12 p-6 rounded-xl
                            flex flex-col items-center justify-center
                            bg-secondary-400
                        `}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-10 h-10"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                                />
                            </svg>

                            <span className="font-bold text-lg">
                                Ganhe descontos
                            </span>
                        </div>
                    </div>
                </div>
                <Image
                    alt="Imagem de um app"
                    src="/3.jpg"
                    height={700}
                    width={600}
                    className={`
                        object-top object-none
                        max-h-[600px] desktop:max-h-[700px]
                        w-full
                        col-span-6                      
                    `}
                />
            </div>
        </section>
    )
}