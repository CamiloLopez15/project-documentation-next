import type { Metadata } from "next";
import { Keania_One } from "next/font/google";
import Menu from "@/components/Menu";
import "./globals.css";

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
        <html lang="en">
            <body
                className={`${inter.className} antialiased dark min-h-screen w-[100vw] h-[100vh] min-w-full overflow-x-hidden transition-colors duration-500 `}
            >
                <div className="dark:bg-black bg-white dark:text-primary-dark-gray text-black flex flex-col min-h-screen min-w-full">
                    <Menu />
                    {children}
                </div>
            </body>
        </html>
    );
}
