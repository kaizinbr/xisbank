import Image from "next/image"

export default function ContainerTwo() {
    return (
        <section id="segurança-financeira" className="md:col-span-12 col-span-4">
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
                        Torne a{" "}
                        <span className="bg-secondary-300/50">
                            segurança financeira
                        </span>{" "}
                        parte do seu cotidiano.
                    </h3>
                    <p
                        className={`
                        text-base desktop:text-2xl font-normal
                        text-irish-coffee-900
                        
                    `}
                    >
                        Gerencie créditos, débitos, investimentos e muito mais!
                        Com nossas alternativas de shopping, você pode comprar o
                        que quiser e parcelar em até 12x sem juros, mantendo sua
                        segurança financeira. Com nossa assistência, suas contas
                        estarão sempre em dia, e você nunca mais vai se
                        preocupar com atrasos.
                    </p>
                </div>
                <Image
                        alt="Imagem de um app"
                        src="/2.jpg"
                        height={600}
                        width={800}
                        className={`
                            object-cover
                            max-h-[600px] desktop:max-h-[700px]
                            m-auto
                            col-span-6
                        `}
                    />
            </div>
        </section>
    )
}