import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { getDeviceInfo } from "../utils/movil";

const useHome = () => {
  const { showMenu, showHeader, setShowHeader } = useContext(AppContext);
  const [videoWidth, setVideoWidth] = useState("516");
  const location = useLocation();

  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    if (deviceInfo) {
      setVideoWidth("100%");
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      if (!showHeader) setShowHeader(true);
    }
  }, [location]);

  return {
    videoWidth,
    showMenu,
  };
};

export default useHome;
