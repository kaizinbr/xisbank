import Image from "next/image"

export default function ContainerFive() {
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
                    src="/4.jpg"
                    height={600}
                    width={900}
                    className={`
                        object-cover
                        max-h-[600px]
                        w-full my-auto
                        col-span-6
                        desktop:max-w-[600px]                    
                    `}
                />
                <div
                    className={`
                        flex flex-col items-start justify-center
                        gap-8 max-w-2xl
                        col-span-6
                    `}
                >
                    <h3
                        className={`
                        text-4xl font-bold
                        text-irish-coffee-900
                        neulisTitle
                    `}
                    >
                        Viva o seu melhor com{" "}
                        <span className="text-secondary-500">xịs</span>!
                    </h3>
                    <span
                        className={`
                        text-9xl 
                        text-irish-coffee-900 
                        neulis font-semibold
                        transform rotate-90
                        text-center w-full
                        z-10
                    `}
                    >
                        ịs
                    </span>
                </div>
            </div>
        </section>
    )
}