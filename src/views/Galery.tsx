import Header from "../components/Header";
import ImageComponent from "../components/ImageComponent";
import useGalery from "../hooks/useGalery"

const Galery = () => {
  const { loading, files } = useGalery()
  if (loading) return <h1>Cargando...</h1>
  return (
    <div>
      <Header />
      <div className="min-h-screen max-h-auto">
        <h1 className="text-center font-bold text-3xl" >Galeria</h1>
        <div className='flex justify-center items-center'>
          <div
            className="grid md:grid-cols-5 md:gap-4 items-center sm:grid-cols-2 sm:gap-2 mb-20 sm:px-2 md:px-0">
            {
              files.map((item, i) => (
                <ImageComponent url={item.secure_url} i={i} key={i.toString()} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Galery
