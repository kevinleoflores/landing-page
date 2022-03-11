import { Box, Typography, Button } from "@mui/material";

const Banner = () => {
  return (
    <Box component="section" className="section-below-header">
      <Box className="hero-banner__text">
        <Box>
          <Typography component="h1" variant="h1">
            Technology Made Human
          </Typography>
          <Typography sx={{ width: "50%", paddingTop: "32px" }}>
            Providing holistic technology solutions to help enterprises
            accelerate in the new digital economy.
          </Typography>
          <Box>
            <Button className="hero-banner__btn">Explore our Solutions</Button>
          </Box>
        </Box>
      </Box>
      {/* <Box className="filter"></Box> */}

      <Box className="hero-banner">
        <Box component="img" src="./assets/banner.jpg" />
      </Box>
    </Box>
  );
};
export default Banner;
