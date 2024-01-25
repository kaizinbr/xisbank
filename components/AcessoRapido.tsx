import Image from "next/image";

export default function AcessoRapido() {
    return (
        <div
            className={`
                md:col-span-12 col-span-4
                flex flex-col items-center justify-center py-9
                
                bg-secondary-500
            `}
        >
            <h3 className="font-bold neulis mb-6 text-4xl text-parchment-100">
                Acesso rápido
            </h3>
            <div
                className={`
                items-center justify-center
                gap-10 

                grid arquery:grid-cols-12 small:grid-cols-2 grid-cols-2
                px-6 desktop:px-0
            `}
            >
                <div
                    className={`
                        small:size-48 size-32 rounded-xl
                        bg-secondary-400
                        small:p-7 p-4 text-parchment-100
                        flex flex-col items-start justify-center
                        group cursor-pointer
                        arquery:col-span-3 col-span-1
                    `}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="#f4eed8"
                        className="w-10 h-10 mb-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                        />
                    </svg>
                    <span className="font-semibold text-sm small:text-base flex-1 ">
                        2ª via de fatura
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:ml-3 ml-0 transition-all duration-300 ease-in-out float-end right-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </div>
                <div
                    className={`
                        small:size-48 size-32 rounded-xl
                        bg-secondary-400
                        small:p-7 p-4 text-parchment-100
                        flex flex-col items-start justify-center
                        group cursor-pointer
                            
                        arquery:col-span-3 col-span-1
                    `}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 mb-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                    </svg>

                    <span className="font-semibold text-sm small:text-base flex-1 ">
                        2ª via de boleto
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:ml-3 ml-0 transition-all duration-300 ease-in-out float-end right-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </div>
                <div
                    className={`
                            small:size-48 size-32 rounded-xl
                            bg-secondary-400
                            small:p-7 p-4 text-parchment-100
                            flex flex-col items-start justify-center
                            group cursor-pointer
                            
                        arquery:col-span-3 col-span-1
                        `}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 mb-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 14.25 6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185ZM9.75 9h.008v.008H9.75V9Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008V13.5Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>

                    <span className="font-semibold text-sm small:text-base flex-1 ">
                        Renegocie suas dívidas
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:ml-3 ml-0 transition-all duration-300 ease-in-out float-end right-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </div>
                <div
                    className={`
                            small:size-48 size-32 rounded-xl
                            bg-secondary-400
                            small:p-7 p-4 text-parchment-100
                            flex flex-col items-start justify-center
                            group cursor-pointer
                            
                        arquery:col-span-3 col-span-1
                        `}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 mb-3"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"
                        />
                    </svg>

                    <span className="font-semibold text-sm small:text-base flex-1 ">
                        Clube de descontos
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 group-hover:ml-3 ml-0 transition-all duration-300 ease-in-out float-end right-0"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
