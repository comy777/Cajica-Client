import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { getDeviceInfo } from "../utils/movil";

const useHome = () => {
  const { setShowHeader, showHeader } = useContext(AppContext);
  const location = useLocation();
  const [videoWidth, setVideoWidth] = useState("516");

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
  };
};

export default useHome;
