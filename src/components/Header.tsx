import Image from "next/image";
import img_Camilo_Lopez from "/public/img/camilo-lopez.png";
export default function Header() {
    return (
        <header className="grid grid-cols-[50%_50%] w-full h-full row-span-1 relative ">
            <div className="flex flex-col justify-center items-start pl-48 text-lg col-span-1">
                <span>Bienvenidos, soy</span>
                <h1 className="text-5xl dark:text-primary-dark-orange text-primary-light-blue">
                    Camilo López
                </h1>
                <span>Soy desarrollador web</span>
                <p className="mt-4 text-xl">
                    Has llegado a una de mis páginas webs, en esta página web te
                    hablaré a detalle en la forma en como fueron construidos
                    cada uno de mis proyectos.
                </p>
            </div>
            <div className="w-full h-full relative flex justify-center items-center">
                <div className="absolute bg-primary-light-blue dark:bg-primary-dark-orange w-[100%] h-[90%] rounded-full z-20 -rotate-[25deg] -right-32 bottom-30"></div>
                <Image
                    src={img_Camilo_Lopez}
                    alt="Camilo López"
                    className="w-[45%] object-contain rounded-full flex justify-center items-center relative z-30 bottom-10"
                />
            </div>
        </header>
    );
}
