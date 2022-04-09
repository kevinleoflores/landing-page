import { Box, Typography } from "@mui/material";
import classes from "./style.module.css";

const ImageText = ({ title, description }) => {
  return (
    <Box className={classes["image-text-component"]}>
      <Box sx={{ display: "flex" }} className={classes.inner}>
        <Box className={classes["image-container"]}>
          <Box component="img" src="/assets/section2.jpg" />
        </Box>
        <Box className={classes.details}>
          <Box>
            <Typography component="h1" variant="h3">
              What is {title}?
            </Typography>
            <Typography>{description}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ImageText;
