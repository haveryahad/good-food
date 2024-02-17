import { useState, useEffect } from "react";

const useOnlineStatus = (componentName) => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  console.log("before hook:: called from " + componentName);
  useEffect(() => {
    console.log("inside useEffect:: called from " + componentName);
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
