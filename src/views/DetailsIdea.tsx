import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ReactPlayer from 'react-player'
import { Form } from "../interfaces/Response"
import { imagesExtension } from "../utils/data"
import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import Zoom from 'react-medium-image-zoom'
import moment from 'moment'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'react-medium-image-zoom/dist/styles.css'
import Header from "../components/Header"

const DetailsIdea = () => {
  const location = useLocation()
  const { state } = location
  const { createdAt, icon, url, originalname, msg, extensionFile, enlace, file }: Form = state
  const fecha = moment(createdAt).format("MMM Do YY");
  const [urlImage, setUrlImage] = useState(false)
  useEffect(() => {
    if (imagesExtension.includes(extensionFile)) setUrlImage(true)
  }, [url])
  return (
    <div>
      <Header />
      <div className="min-h-screen max-h-auto">
        <div className="p-5" >
          <h1 className="text-center font-bold text-3xl">Idea de reciclaje</h1>
          <div>
            <div className={urlImage || enlace ? "" : "h-96 flex justify-center items-center"} >
              {
                urlImage || enlace ? (
                  <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, EffectCards]}
                    spaceBetween={50}
                    pagination={{ clickable: true }}
                    direction='horizontal'
                  >
                    {
                      enlace && (
                        <SwiperSlide className='w-full flex justify-center mt-5'>
                          <ReactPlayer url={enlace} />
                        </SwiperSlide>
                      )
                    }
                    {
                      urlImage && (
                        <SwiperSlide className='w-full flex justify-center mt-5 items-center'>
                          <Zoom>
                            <img src={url ? url : icon} className="object-contain" alt={originalname} />
                          </Zoom>
                        </SwiperSlide>
                      )
                    }
                  </Swiper>
                ) : (
                  <div>
                    <img src={icon} className="h-48 w-48 object-contain" />
                  </div>
                )
              }
            </div>
            <div className="mb-12" >
              <h2 className="font-bold text-2xl">Descripcion de la idea</h2>
              <div className="pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Fecha: {fecha}</span>
              </div>
              <p>{msg}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DetailsIdea
