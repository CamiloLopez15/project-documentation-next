import Image from "next/image";
interface Props {
  tech: string
}

export default function TechnologiesImg(props:Props) {
  return (
    <div className="inline">{props.tech}</div>
  )
}
