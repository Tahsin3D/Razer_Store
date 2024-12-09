/* eslint-disable react/prop-types */
import { IconButton } from "@mui/material";

const IconBtn = ({ icon, on_Click, id }) => {
  return (
    <IconButton
      id={id}
      onClick={on_Click}
      sx={{zIndex: 1,height: '40px', width: '40px' ,border: "1px solid gray", borderRadius: "2px" }}
    >
      {icon}
    </IconButton>
  );
};

export default IconBtn;
