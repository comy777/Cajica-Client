import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getDataApp, getDataCard, getDataMaterials } from "../api/request";
import { AppContext } from "../context/AppContext";
import { StateHome } from "../interfaces/Components";
import { getDeviceInfo } from "../utils/movil";

const useHome = () => {
  const { showMenu, showHeader, setShowHeader } = useContext(AppContext);
  const location = useLocation();
  
  const [data, setData] = useState<StateHome>({
    dataApp: [],
    dataCard: [],
    dataMaterials: [],
    loading: true,
    videoWidth: "516"
  })

  const getData = async () => {
    const [dataApp, dataCard, dataMaterials] = await Promise.all([getDataApp, getDataCard, getDataMaterials])
    setData({
      ...data,
      dataApp: dataApp.data.data,
      dataCard: dataCard.data.data,
      dataMaterials: dataMaterials.data.data,
      loading: false
    })
  }

  useEffect(() => {
    (async () => await getData())()
  }, [])
  
  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    if (deviceInfo) {
      setData({...data, videoWidth: "100%"})
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      if (!showHeader) setShowHeader(true);
    }
  }, [location]);

  return {
    ...data,
    showMenu,
  };
};

export default useHome;
