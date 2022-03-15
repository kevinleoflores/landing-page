import { Box, Typography } from "@mui/material";
import classes from "./styles.module.css";
const CardOne = ({
  icon,
  title,
  description,
  process1 = "",
  process2 = "",
  process3 = "",
  process4 = "",
  process5 = "",
}) => {
  return (
    <Box className={classes.card}>
      <Box className={classes.cardone}>
        <Box component="img" src={icon} />
        <Typography component="h6" variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Typography className={classes.description}>{description}</Typography>
        <Box sx={{ display: "flex", margin: "56px 0" }}>
          <Box sx={{ flex: 1 }}>
            <Typography className={classes.process}>{process1}</Typography>
            <Typography className={classes.process}>{process2}</Typography>
            <Typography className={classes.process}>{process3}</Typography>
          </Box>
          {process4 && (
            <Box sx={{ flex: 1 }}>
              <Typography className={classes.process}>{process4}</Typography>
              <Typography className={classes.process}>{process5}</Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default CardOne;
