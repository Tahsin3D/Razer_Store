import { Box } from "@mui/material"
import HomeProductsSection from "../components/HomeProductsSection"
import { Hero } from "../utils"

const HomePage = () => {
  return (
    <Box>
      <Hero/>
      <HomeProductsSection/>
    </Box>
  )
}

export default HomePage
