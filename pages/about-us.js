import { Box, Typography } from "@mui/material";
import AboutHistory from "../components/AboutUs/AboutHistory";
import AboutBanner from "../components/AboutUs/AboutBanner";
import Team from "../components/AboutUs/Team";
import SectionEight from "../components/Home/SectionEight";
import Articles from "../components/Home/Articles";
const AboutUs = () => {
  return (
    <Box className="about-us">
      <AboutBanner />
      <AboutHistory />
      <Team />
      <Articles />
    </Box>
  );
};
export default AboutUs;
