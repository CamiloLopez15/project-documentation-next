import { Articles, Header } from "@/components";
export default function Home() {
    return (
        <main className="grid grid-rows-[60%_40%] w-full h-full min-h-full dark:bg-black bg-black/10">
            {/* Header */}
            <Header />
            {/* Body */}
            <section className="relative w-full h-full z-40 dark:bg-white/10 row-span-1">
                <h1 className="text-4xl  text-primary-light-blue dark:text-primary-dark-orange my-14 mx-48 bg-transparent min-h-min">
                    Proyectos
                </h1>
                <div className="flex flex-col justify-start items-start w-[100vw] px-48 h-auto bg-transparent pb-10">
                    <Articles
                        title="Blog"
                        description="Esto es un blog 4k 60 fps"
                        date={new Date()}
                        hour="4:28"
                        technologies={["JS", "HTML", "REACT"]}
                    />
                </div>
            </section>
        </main>
    );
}
