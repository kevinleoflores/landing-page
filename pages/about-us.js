import { Box, Typography } from "@mui/material";
import AboutHistory from "../components/AboutUs/AboutHistory";
import AboutBanner from "../components/AboutUs/AboutBanner";
import Team from "../components/AboutUs/Team";
import SectionEight from "../components/Home/SectionEight";
import Articles from "../components/Home/Articles";
import PageBanner from "../components/common/PageBanner";
const AboutUs = () => {
  return (
    <Box className="about-us">
      <PageBanner
        title="About Us"
        description="Get to know us! The Company that promises to help you go above and
          beyond your limits"
      />
      <AboutHistory />
      <Team />
      <Articles />
    </Box>
  );
};
export default AboutUs;
