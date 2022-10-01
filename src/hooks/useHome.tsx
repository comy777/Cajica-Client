import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { getDeviceInfo } from "../utils/movil";

const useHome = () => {
  const { showMenu } = useContext(AppContext);
  const [videoWidth, setVideoWidth] = useState("516");

  useEffect(() => {
    const deviceInfo = getDeviceInfo();
    if (deviceInfo) {
      setVideoWidth("100%");
    }
  }, []);

  return {
    videoWidth,
    showMenu,
  };
};

export default useHome;
