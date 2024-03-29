import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "xịs | o banco braSileiro",
    description: "xịs, o banco mais braSileiro que existe",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br">
            <body
                className={dmSans.className + ` ` + ` bg-parchment-100 mt-20`}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
