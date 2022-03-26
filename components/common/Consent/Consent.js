import * as React from "react";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import classes from "./style.module.css";

const Consent = ({
  allowMessage,
  allowProcess,
  allowMessageChangeHandler,
  allowProcessChangeHandler,
}) => {
  return (
    <Box sx={{ padding: "0 16px" }}>
      <Typography className={classes.consent}>
        Yondu, Inc. respects and values your privacy. Rest assured that we will
        only use your personal information for administering your account and
        addressing your needs. If you want to receive helpful communications
        about our products and services, please tick the box below.
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={allowMessage}
          onChange={allowMessageChangeHandler}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography className={classes.consent}>
          Yes, I want to receive communications from Yondu, Inc.
        </Typography>
      </Box>
      <Typography className={classes.consent}>
        We would need your personal data to process your requested content. If
        you allow us to use your data for this purpose, please check the box
        below.
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={allowProcess}
          onChange={allowProcessChangeHandler}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Typography className={classes.consent}>
          Yes, I allow Yondu, Inc. to store and process my personal info
        </Typography>
      </Box>
      <Typography className={classes.consent}>
        You can unsubscribe from these communications at any time. For more
        information on how to unsubscribe, our privacy practices, and how we are
        committed to protecting and respecting your privacy, please review our
        Privacy Policy.
      </Typography>
    </Box>
  );
};
export default Consent;
