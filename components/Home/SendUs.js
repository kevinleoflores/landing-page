import { Box, Typography, Button } from "@mui/material";

const SendUs = () => {
  return (
    <Box className="bg-1">
      <Box component="section" className="send-us">
        <Box
          className="send-us__inner"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box className="send-us__text" sx={{ padding: "24px 0" }}>
            <Typography component="h5" variant="h5">
              Want to know more? We're here to listen and provide expert advice
              to you.
            </Typography>
          </Box>
          <Box
            className="send-us__btn"
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Button className="secondary-btn" style={{ margin: "auto" }}>
              Send us a message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SendUs;
