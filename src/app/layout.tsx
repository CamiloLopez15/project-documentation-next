import type { Metadata } from "next";
import { Keania_One } from "next/font/google";
import { GlobalContextProvider } from "@/context/store";
import {Menu} from "@/components";
import "@/css/globals.css";

const inter = Keania_One({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "DOCPI",
    description: "Proyecto sobre la documentación de cada uno de los proyectos",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${inter.className} antialiased dark min-h-screen overflow-x-hidden transition-colors duration-500 `}
            >
                <GlobalContextProvider>
                    <div className="dark:bg-black bg-white dark:text-primary-dark-gray text-black flex flex-col">
                        <Menu />
                        {children}
                    </div>
                </GlobalContextProvider>
            </body>
        </html>
    );
}
