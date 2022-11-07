import Lottie from 'react-lottie'
import { Link } from 'react-router-dom';
import animationData from '../lottie/86897-gallery-icon-animation.json';


const Galerycomponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Link to="galery" >
      <div className="sticky top-1/3 bottom-0 fab">
        <Lottie options={defaultOptions} height={60} width={60} />
      </div>`
    </Link>
  )
}

export default Galerycomponent
