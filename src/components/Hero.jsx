/* eslint-disable react/prop-types */
import { Box, Stack } from "@mui/material"

import ProductCarousal from "./ProductCarousal"

const Hero = () => {
  return (
    <Box sx={{paddingTop: '60px' ,width: '100%', height: '608px', background: 'repeating-linear-gradient(-45deg, #111417 0%,#111417 0.25%, #181a1b 0.25%, #181a1b 0.5%)'}}>
      <Stack direction='row' sx={{ height: '608px'}}>
        <ProductCarousal/>
      </Stack>
    </Box>
)
}

export default Hero
