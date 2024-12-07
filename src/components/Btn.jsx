/* eslint-disable react/prop-types */
import { Button } from "@mui/material"

const Btn = ({text}) => {
  return (
    <Button href="#" sx={{backgroundColor: "#27f026", color: 'black', fontWeight: 'bold', p: '10px 30px'}}>
        {text}
    </Button>
  )
}

export default Btn
