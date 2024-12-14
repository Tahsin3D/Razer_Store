/* eslint-disable react/prop-types */
import { Button } from "@mui/material"
import { Link } from "react-router-dom"

const Btn = ({text, to}) => {
  return (
    <Button component={Link} to={to} style={{minWidth: '150px', minHeight: '50px',backgroundColor: "#27f026", color: 'black', fontWeight: '600', p: '10px 30px', fontSize: '0.9rem'}}>
        {text}
    </Button>
  )
}

export default Btn
