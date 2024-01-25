import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className={`
                md:col-span-12 col-span-4
                flex flex-col items-center justify-center py-16 px-6 sm:px-16
                divide-y divide-irish-coffee-500
                bg-irish-coffee-900
            `}
        >
            <div
                className={`
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20
                text-parchment-100
                w-full
            `}
            >
                <div
                    className={`
                    flex flex-col items-start justify-start 
                `}
                >
                    <p className="neulis text-lg font-semibold mb-5">xịs</p>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Sobre nós
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Carreiras
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Perguntas frequentes
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Contato
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Imprensa
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        ESG
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Investidores
                    </Link>
                </div>
                <div
                    className={`
                    flex flex-col items-start justify-start 
                `}
                >
                    <p className="neulis text-lg font-semibold mb-5">
                        Produtos
                    </p>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Conta digital
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Conta artista
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Conta PJ
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Conta Kids
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Cartão de crédito
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Clube de vantagens
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        XisInvest
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Consultoria
                    </Link>
                </div>
                <div
                    className={`
                    flex flex-col items-start justify-start 
                `}
                >
                    <p className="neulis text-lg font-semibold mb-5">
                        Veja mais
                    </p>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Blog
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Trabalhe conosco
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Informações úteis
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Parcerias de seguros
                    </Link>
                </div>
                <div
                    className={`
                    flex flex-col items-start justify-start 
                `}
                >
                    <p className="neulis text-lg font-semibold mb-5">
                        Atendimento
                    </p>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        WhatsApp
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Twitter
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        faleconosco@xis.com.br
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Atendimento em libras
                    </Link>
                    <span className="font-semibold text-parchment-200 text-sm">
                        Capitais e regiões metropolitanas
                    </span>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        4004-0000
                    </Link>
                    <span className="font-semibold text-parchment-200 text-sm">
                        Outras regiões
                    </span>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        0800-000-0000
                    </Link>
                    <span className="font-semibold text-parchment-200 text-sm">
                        Ouvidoria
                    </span>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        0800-000-0000
                    </Link>

                    <span className="font-semibold text-parchment-200 text-sm">
                        2ª a 6ª das 8h às 18h
                    </span>
                </div>
                <div
                    className={`
                    flex flex-col items-start justify-start 
                `}
                >
                    <p className="neulis text-lg font-semibold mb-5">
                        Transparência
                    </p>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Política de privacidade
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Política de segurança
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Contratos
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                    >
                        Relatórios financeiros
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Ética e compliance
                    </Link>
                    <Link
                        className="font-bold text-parchment-200 mb-1"
                        href="#"
                        target="_blank"
                        rel="noopener"
                    >
                        Dados abertos
                    </Link>
                </div>
            </div>
            <div
                className={`
                flex flex-col md:flex-row items-start gap-4 md:items-center justify-center
                mt-16 pt-10
                w-full text-parchment-100
            `}
            >
                <h1 className="neulisTitle text-6xl mr-6">xịs</h1>
                <span className="flex-1">
                    © 2024 Banco Xis S.A - Instituição financeira.
                    00.000.000/0001-69 Rua Clarice Falcão, 26 - João Pessoa, PB
                    - 58088-090
                </span>
                <div className="flex flex-row gap-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                        />
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                        />
                    </svg>
                </div>
            </div>
        </footer>
    );
}
