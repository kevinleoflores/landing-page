import { Box, Button, Typography } from "@mui/material";
import classes from "./casecard.module.css";
const CaseCard = ({ title, description, date, img }) => {
  return (
    <Box className={classes.card} sx={{ display: "flex" }}>
      <Box>
        <Box component="img" src={img} />
      </Box>
      <Box sx={{ width: "60%", marginLeft: "24px" }}>
        <Box>
          <Typography component="h1" variant="h6">
            {title}
          </Typography>
          <Typography>{description}</Typography>
          <Typography sx={{ fontWeight: 600 }}>Posted: {date}</Typography>
          <Typography className={classes.btn} sx={{ padding: "0" }}>
            Read More
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
export default CaseCard;
