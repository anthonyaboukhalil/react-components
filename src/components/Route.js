import { useEffect, useState } from "react";
const Route = ({ path, children }) => {
  const [currPath, setCurrPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      setCurrPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currPath === path ? children : null;
};

export default Route;
