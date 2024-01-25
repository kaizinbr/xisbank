import Image from "next/image"

export default function ContainerThree() {
    return (
        <section id="cartao" className="md:col-span-12 col-span-4">
            <div
                className={`
                    min-h-[calc(100vh-5rem)]

                    grid sm:grid-cols-6 
                    sm:gap-x-8 gap-y-6
                    sm:px-12 py-6
                    gap-x-2 grid-cols-4 px-6
                    justify-items-center
                    desktop:grid-cols-12
                `}
            >
                <Image
                    alt="Imagem de um app"
                    src="/card/Ativo 11.png"
                    height={500}
                    width={600}
                    className={`
                        object-cover
                        max-h-[600px] desktop:max-h-[700px]
                        m-auto
                        col-span-6                    
                    `}
                />
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
                        Um cartão que atende as suas{" "}
                        <span className="bg-irish-coffee-300/50">
                            necessidades
                        </span>
                        !
                    </h3>
                    <p
                        className={`
                        text-base desktop:text-2xl font-normal
                        text-irish-coffee-900
                        
                    `}
                    >
                        Temos uma variedade de cartões para você escolher, cada
                        um com suas vantagens e benefícios. Escolha o que mais
                        se adequa às suas necessidades e aproveite!
                    </p>

                    <div
                        className={`
                        flex flex-row items-center justify-start
                        flex-wrap
                        gap-4
                        md:mt-8 
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
                            <span className="ml-2">Para você</span>
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
                            <span className="ml-2">Para o seu negócio</span>
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
                            <span className="ml-2">Para os seus filhos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}