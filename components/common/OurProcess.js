import { Box, Typography } from "@mui/material";
import classes from "./style.module.css";

const OurProcess = ({ title = "", description = "", data }) => {
  return (
    <Box className={classes["our-process"]}>
      <Box className={classes.title}>
        <Typography component="h1" variant="h3">
          Our Process
        </Typography>
        <Typography>
          Grow your business online and increase your customer base as Yondu
          turns your ideas into a mobile application your prospects can
          conveniently use anytime, anywhere.
        </Typography>
      </Box>
      <Box>
        <Box>
          {data.map((row, index) => {
            const classNameImage =
              index % 2 === 0 ? classes.leftImage : classes.rightImage;
            const classNameText =
              index % 2 === 1 ? classes.leftImage : classes.rightImage;
            return (
              <Box
                sx={{ display: "flex" }}
                className={classes.details}
                key={index}
              >
                <Box className={`${classes.image} ${classNameImage}`}>
                  <Box component="img" src="/assets/solutions.png" />
                </Box>
                <Box className={`${classes.text} ${classNameText}`}>
                  <Typography component="h2" variant="h4">
                    {row.title}
                  </Typography>
                  <Typography>{row.description}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default OurProcess;
