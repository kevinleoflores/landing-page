import { Box, Typography } from "@mui/material";
import classes from "./style.module.css";
import { Icon } from "@iconify/react";

const WhyChoose = ({ title, description = "", features = null }) => {
  console.log(features)
  return (
    <Box className={classes["why-choose"]}>
      <Box className={classes.title}>
        <Typography component="h1" variant="h3">
          Why Choose {title}?
        </Typography>
        <Typography>{description}</Typography>
      </Box>
      <Box sx={{ display: "flex" }} className={classes.content}>
        {features !== null &&
          features.map((feature, index) => {
            return (
              <Box className={classes["content-item"]} key={index}>
                <Box className={classes.icon}>
                  <Icon icon={feature.icon} width={45} height={45} />
                </Box>
                <Box className={classes["item-title"]}>{feature.title}</Box>
                <Box className={classes["item-desc"]}>
                  {feature.description}
                </Box>
              </Box>
            );
          })}
      </Box>
    </Box>
  );
};
export default WhyChoose;
