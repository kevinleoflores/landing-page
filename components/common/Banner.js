import { Box, Typography, Button } from "@mui/material";

const Banner = ({ title, banner = "", description, btnText }) => {
  return (
    <Box
      component="section"
      className="section-below-header"
      sx={{ padding: "0" }}
    >
      <Box className="hero-banner__text">
        <Box>
          <Typography component="h1" variant="h1">
            {title}
          </Typography>
          <Typography sx={{ paddingTop: "32px" }}>{description}</Typography>
          <Box className="btn-container">
            <Button className="hero-banner__btn">{btnText}</Button>
          </Box>
        </Box>
      </Box>
      {/* <Box className="filter"></Box> */}

      <Box className="hero-banner">
        <Box component="img" src={banner} />
      </Box>
    </Box>
  );
};
export default Banner;
