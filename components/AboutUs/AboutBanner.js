import { Box, Typography } from "@mui/material";

const AboutBanner = () => {
  return (
    <Box className="about-banner">
      <Box className="about-banner__title">
        <Typography component="h1" variant="h3">
          About Us
        </Typography>
        <Typography>
          Get to know us! The Company that promises to help you go above and
          beyond your limits
        </Typography>
      </Box>
    </Box>
  );
};
export default AboutBanner;
