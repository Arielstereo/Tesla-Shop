import { titleFont } from "../../config/fonts"


const Title = ({title, subtitle}) => {
  return (
    <div className="flex flex-col gap-4 my-12">
      <h1 className="text-3xl">{title}</h1>
      <h3 className="text-lg text-slate-200">{subtitle}</h3>
    </div>
  )
}

export default Title