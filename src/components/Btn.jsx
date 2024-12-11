/* eslint-disable react/prop-types */
import { Button } from "@mui/material"

const Btn = ({text}) => {
  return (
    <Button href="#" sx={{width: '180px',backgroundColor: "#27f026", color: 'black', fontWeight: '900', p: '10px 30px'}}>
        {text}
    </Button>
  )
}

export default Btn
