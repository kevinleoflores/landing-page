import { Box, Typography } from "@mui/material";

const PageBanner = ({ title, description }) => {
  return (
    <Box className="page-banner">
      <Box className="page-banner__title">
        <Typography component="h1" variant="h3">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
};
export default PageBanner;
