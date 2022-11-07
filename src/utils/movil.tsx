export const getDeviceInfo = () => {
  const navigatorInfo = navigator.userAgent;
  if (
    navigatorInfo.match(/Android/i) ||
    navigatorInfo.match(/webOS/i) ||
    navigatorInfo.match(/iPhone/i) ||
    navigatorInfo.match(/iPad/i) ||
    navigatorInfo.match(/iPod/i) ||
    navigatorInfo.match(/BlackBerry/i) ||
    navigatorInfo.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
};
