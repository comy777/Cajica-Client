import { useMemo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { ImagecomponentProps } from "../interfaces/Components";

const ImageComponent = ({ url, i, card }: ImagecomponentProps) => {
  return useMemo(() => {
    return (
      <div>
        {
          card ? (
            <LazyLoadImage
              height={250}
              src={url}
              width={250}
              className="h-48 w-48 object-contain"
            />
          ) : (
            <Zoom>
              <img src={url} loading="lazy" className="h-48 w-48" />
            </Zoom>
          )
        }
      </div>
    )
  }, [url])
}

export default ImageComponent
