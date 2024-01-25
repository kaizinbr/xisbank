import AcessoRapido from "@/components/AcessoRapido";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ContainerFive from "@/components/containers/ConstainerFive";
import ContainerFour from "@/components/containers/ConstainerFour";
import ContainerOne from "@/components/containers/ConstainerOne";
import ContainerThree from "@/components/containers/ConstainerThree";
import ContainerTwo from "@/components/containers/ConstainerTwo";
import Image from "next/image";

export default function Home() {
    return (
        <main
            className={`
            h-screen justify-center
            grid md:grid-cols-12 grid-cols-4 gap-8
        `}
        >
            <div
                className={`
                    md:col-span-12 col-span-4
                    flex flex-col items-end justify-start md:justify-center
                    bg-[url('/1.jpg')] bg-cover bg-center
                    h-[calc(100vh-5rem)]
                `}
            >
                <div className="desktop:w-1/2 md:w-3/4 w-full left-0 pl-8 pr-8 md:pl-0 mt-8 md:mt-0">
                    <h3
                        className={`
                            text-3xl md:text-6xl font-bold
                            text-parchment-100
                            neulisTitle left-0
                        `}
                    >
                        Faça parte do banco mais BraSileiro que existe
                    </h3>
                    <p
                        className={`
                            text-xl desktop:text-2xl font-normal
                            text-parchment-100
                            neulis
                        `}
                    >
                        Assuma o controle e deixe tudo do seu jeito.
                    </p>
                </div>
            </div>
            <ContainerOne />
            <AcessoRapido />
            <ContainerTwo />
            <ContainerThree />
            <ContainerFour />

            <ContainerFive />
            <Footer />
        </main>
    );
}
