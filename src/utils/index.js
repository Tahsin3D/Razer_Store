//default exports
export {default as Navbar} from "../components/Navbar";
export {default as Hero}   from "../components/Hero";
export {default as Footer}   from "../components/Footer";
export {default as HomePage}   from "../pages/HomePage.jsx";
export {default as Btn}   from "../components/Btn.jsx";
export {default as ArrowDown} from '@mui/icons-material/KeyboardArrowDown';
export {default as  FacebookIcon }from '@mui/icons-material/Facebook';
export {default as  XIcon} from '@mui/icons-material/X';
export {default as  InstagramIcon} from '@mui/icons-material/Instagram';

//imports
import MouseImg   from '../assets/Mouse.png';
import HeadphoneImg   from '../assets/Headphones.png';
import SmallKeyboardImg   from '../assets/Keyboard-sm.png';
import KeyboardImg   from '../assets/Keyboard.png';

//named exports
export {MouseImg, HeadphoneImg, SmallKeyboardImg, KeyboardImg, products};

//extra variables
const products = [
    [
      "Razer Mamba Pro",
      "World's first automated full control mice developed in 2016, Special for gaming.",
      MouseImg
    ],
    [
      "Razer Kraken X",
      "Lightweight and comfortable headphones with 7.1 surround sound, launched in 2019.",
      HeadphoneImg
    ],
    [
      "Razer BlackWidow",
      "Mechanical gaming keyboard with RGB lighting and customizable keys.",
      KeyboardImg
    ],
    [
      "Razer Tartarus Pro",
      "Advanced touchpad with adjustable actuation and 32 programmable keys for gaming.",
      SmallKeyboardImg
    ],
  ];