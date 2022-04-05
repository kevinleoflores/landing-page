import { Box, Typography } from "@mui/material";
import classes from "./style.module.css";

const ImageText = () => {
  return (
    <Box className={classes["image-text-component"]}>
      <Box sx={{ display: "flex" }} className={classes.inner}>
        <Box className={classes["image-container"]}>
          <Box component="img" src="/assets/section2.jpg" />
        </Box>
        <Box className={classes.details}>
          <Box>
            <Typography component="h1" variant="h3">
              What is Cloud Migration?
            </Typography>
            <Typography>
              Yondu is a top IT solutions company wholly owned by Globe. It
              helps enterprises scale in the new digital economy by providing
              industry-standard, secure, and scalable solutions that create
              happier technological experiences. Yondu’s top-notch technology
              solutions include Custom Software Development, Managed IT
              Services, Cloud Business Solutions, Messaging Gateways, Business
              Productivity and Ready-to-Use Platforms.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default ImageText;
