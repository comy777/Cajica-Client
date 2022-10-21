import { useCallback, useContext } from "react";
import {useDropzone} from 'react-dropzone'
import { AppContext } from "../context/AppContext";
import { DropZoneProps } from "../interfaces/Components";
import animationData from '../lottie/5364-drag-drop-upload.json';

const useDrop = () => {

  const {setFile, file} = useContext(AppContext);

  const onDrop = useCallback((acceptedFiles : any) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  }, [])

  const deleteFile = () => setFile(undefined)

  const {getRootProps, getInputProps, isDragActive, open} = useDropzone({onDrop, noClick: true})

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return {
    getRootProps, 
    getInputProps, 
    isDragActive, 
    open,
    defaultOptions,
    file,
    deleteFile
  }
}

export default useDrop;