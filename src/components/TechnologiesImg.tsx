import Image from "next/image";
interface Props {
  tech: string
}

export default function TechnologiesImg(props:Props) {
  return (
    <div className="inline hover:scale-125 transition-transform duration-200">
      <Image src={`/tech/${props.tech}.png`} width={32} height={32} alt={props.tech} />
    </div>
  )
}
