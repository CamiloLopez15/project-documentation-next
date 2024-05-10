interface Props {
    title: string;
    description: string;
    date: Date;
    hour: string;
    technologies: string[];
}
import TechnologiesImg from "@/components/TechnologiesImg";
export default function Articles(props: Props) {
    const { title, description, date, hour, technologies } = props;
    return (
        <article className="flex flex-col gap-1 group hover:scale-105 transition-transform duration-200 cursor-pointer">
            <h2 className="dark:text-primary-dark-orange text-primary-light-blue text-2xl w-fit">
                {title}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-primary-light-blue dark:bg-primary-dark-orange"></span>
            </h2>
            <span className="dark:text-primary-dark-gray text-black opacity-80 text-base w-fit">
                {date.toString()}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 dark:bg-primary-dark-gray bg-black opacity-80"></span>
            </span>
            <p className="text-lg text-black dark:text-primary-dark-gray w-fit">
                {description}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 dark:bg-primary-dark-gray bg-black"></span>
            </p>
            <div className="flex justify-start items-center gap-2">
                {technologies.map((tech, i) => (
                    <TechnologiesImg tech={tech} key={i} />
                ))}
            </div>
        </article>
    );
}
