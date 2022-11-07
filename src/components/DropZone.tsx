import Lottie from 'react-lottie'
import useDrop from '../hooks/useDropzone';

const DropZone = () => {
  const {open, isDragActive, defaultOptions, getInputProps, getRootProps, file, deleteFile} = useDrop();

  return (
    <div className='h-60 border-white border-solid border-2 mb-5 rounded w-96' >
      <div {...getRootProps()} className='h-40 w-96' >
      {
        !file && !isDragActive ? (
          <div onClick={open} >
            <Lottie options={defaultOptions} height={150} width={150}/>
            <p className='text-center font-bold'>Seleccione un archivo</p>
          </div>
        ) : (
          <div>
            <p>{file ? file.name : "Archivo"}</p>
          </div>
        )
      }
        <input {...getInputProps()} />
      </div>
      {
        file && (
          <div className='flex justify-center'>
            <button 
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-5'
              onClick={deleteFile}
            >
              Quitar archivo
            </button>
          </div>
        )
      }
    </div>
  )
}

export default DropZone