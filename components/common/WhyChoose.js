import { Box, Typography } from "@mui/material";
import classes from "./style.module.css";
import { Icon } from "@iconify/react";

const WhyChoose = () => {
  return (
    <Box className={classes["why-choose"]}>
      <Box className={classes.title}>
        <Typography component="h1" variant="h3">
          Why Choose Cloud Migration?
        </Typography>
        <Typography>
          Our technologies and employees are certified by highly recognized and
          leading organizations to ensure exceptional service and product
          delivery.
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }} className={classes.content}>
        <Box className={classes["content-item"]}>
          <Box className={classes.icon}>
            <Icon icon="ant-design:stock-outlined" width={45} height={45} />
          </Box>
          <Box className={classes["item-title"]}>Increased Productivity</Box>
          <Box className={classes["item-desc"]}>
            Get real-time updates and large file access for the whole team.
            Through cloud-based collaboration, your team can work together
            anytime, anywhere.
          </Box>
        </Box>
        <Box className={classes["content-item"]}>
          <Box className={classes.icon}>
            <Icon icon="ant-design:stock-outlined" width={45} height={45} />
          </Box>
          <Box className={classes["item-title"]}>Increased Productivity</Box>
          <Box className={classes["item-desc"]}>
            Get real-time updates and large file access for the whole team.
            Through cloud-based collaboration, your team can work together
            anytime, anywhere.
          </Box>
        </Box>
        <Box className={classes["content-item"]}>
          <Box className={classes.icon}>
            <Icon icon="ant-design:stock-outlined" width={45} height={45} />
          </Box>
          <Box className={classes["item-title"]}>Increased Productivity</Box>
          <Box className={classes["item-desc"]}>
            Get real-time updates and large file access for the whole team.
            Through cloud-based collaboration, your team can work together
            anytime, anywhere.
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default WhyChoose;
