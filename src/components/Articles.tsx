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
        <article className="flex flex-col gap-1">
            <h2 className="dark:text-primary-dark-orange text-primary-light-blue text-2xl">{title}</h2>
            <span className="text-primary-dark-gray opacity-80 text-base">{date.toString()}</span>
            <p className="text-lg text-black dark:text-primary-dark-gray">{description}</p>
            <div className="flex justify-start items-center gap-2">
                {technologies.map((tech, i) => (
                    <TechnologiesImg tech={tech} key={i} />
                ))}
            </div>
        </article>
    );
}
