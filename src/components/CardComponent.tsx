import { Link } from "react-router-dom"
import { CardComponentProps } from "../interfaces/Components"
import ImageComponent from "./ImageComponent"

const CardComponent = ({ data, index }: CardComponentProps) => {
  const { url, icon, msg } = data
  return (
    <div>
      <Link to="detailsIdea" state={data}>
        <div className="max-w-sm rounded overflow-hidden shadow-lg hover:cursor-pointer">
          <div className="flex justify-center">
            <ImageComponent url={url ? url : icon} i={index} card={true} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Idea</div>
            <p className="text-gray-700 text-base">
              {msg}
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ideas</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CardComponent
