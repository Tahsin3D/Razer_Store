import { Box } from "@mui/material"
import HomeProductsSection from "../components/HomeProductsSection"
import { Hero } from "../utils"
import CommunitySection from "../components/CommunitySection"
import HomeSoftwareSection from "../components/HomeSoftwareSection"

const HomePage = () => {
  return (
    <Box>
      <Hero/>
      <HomeProductsSection/>
      <CommunitySection/>
      <HomeSoftwareSection/>
    </Box>
  )
}

export default HomePage
