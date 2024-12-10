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
export {default as  ShareIcon} from "@mui/icons-material/Share";
export {default as  CloseIcon} from "@mui/icons-material/Close";

//imports
import MouseImg   from '../assets/Mouse.png';
import MouseImg01   from '../assets/Mouse01.png';
import HeadphoneImg   from '../assets/Headphones.png';
import SmallKeyboardImg   from '../assets/Keyboard-sm.png';
import KeyboardImg   from '../assets/Keyboard.png';
import HeadphonesImg01 from '../assets/Headphones01.png';
import KeyboardImg02 from '../assets/Keyboard02.png';
import HeadphonesImg02 from '../assets/Headphones02.png';
import MousePad from '../assets/MousePad.png'

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
    [
      "Razer Kraken 7.1",
      "Immersive headphones with advanced 7.1 surround sound, built for an exceptional gaming experience, launched in 2015.",
      HeadphonesImg01 // Replace with the actual image variable
    ],
    [
      "Razer Lycosa Mirror",
      "High-performance gaming keyboard with a glossy finish, backlit keys, and programmable macros, launched in 2008.",
      KeyboardImg02 // Replace with the actual image variable
    ],
    [
      "Mazer Kraken 21V2",
      "Professional-grade headset offering ultra-clear audio and 21V2 sound drivers for a crisp and immersive soundscape.",
      HeadphonesImg02 // Replace with the actual image variable
    ],
    [
      "Razer Mamba Tournament",
      "High-precision gaming mouse designed for competitive play, featuring customizable RGB lighting and ergonomic design.",
      MouseImg01 
    ],
    [
      "Razer Firefly Light",
      "RGB gaming mouse mat with customizable lighting and optimized surface for precise tracking, launched in 2015.",
      MousePad
    ]
  ];