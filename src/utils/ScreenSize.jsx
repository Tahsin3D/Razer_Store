import { useEffect } from "react";
import { setScreenLarge } from "../redux/screenSizeReducer";
import { useDispatch } from "react-redux";

const ScreenSize = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const changeWidth = () => {
      dispatch(setScreenLarge(window.innerWidth > 1024));
    };
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, [dispatch]);

  return <div></div>;
};

export default ScreenSize;
