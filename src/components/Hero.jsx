import { Box, Stack, Typography } from "@mui/material"
import Btn from "./Btn"

const Hero = () => {
  return (
    <Box sx={{paddingTop: '60px' ,width: '100%', height: '100vh', background: 'repeating-linear-gradient(-45deg, #111417 0%,#111417 0.25%, #181a1b 0.25%, #181a1b 0.5%)'}}>
      <Stack direction='row'>
        {/* <Box>
          <Typography variant="h2">RAZER MAMBA<br/>PRO</Typography>
          <Typography>Worlds first automated full control mice developed<br/>in 2016, Special for gaming.</Typography>
          <Btn text={'VIEW MORE'}/>
        </Box> */}
      </Stack>
    </Box>
)
}

export default Hero
