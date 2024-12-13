/* eslint-disable react/prop-types */
import { Button } from "@mui/material"

const Btn = ({text}) => {
  return (
    <Button href="#" sx={{minWidth: '150px',backgroundColor: "#27f026", color: 'black', fontWeight: '600', p: '10px 30px', fontSize: '0.9rem'}}>
        {text}
    </Button>
  )
}

export default Btn
