import { Box } from "@mui/material"
import HomeProductsSection from "../components/HomeProductsSection"
import { Hero } from "../utils"
import CommunitySection from "../components/CommunitySection"

const HomePage = () => {
  return (
    <Box>
      <Hero/>
      <HomeProductsSection/>
      <CommunitySection/>
    </Box>
  )
}

export default HomePage
