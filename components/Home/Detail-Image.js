import { Box, Typography, Button } from "@mui/material";
import { WHO_WE_ARE } from "../../utils/content";

const DetailImage = () => {
  return (
    <Box
      id="about us"
      component="section"
      className="detail-image"
      sx={{ padding: "0" }}
    >
      <Box sx={{ flex: 1 }}>
        <Box className="detail-text">
          <Typography component="h1" variant="h3">
            Who are We
          </Typography>
          <Typography className="desc">{WHO_WE_ARE}</Typography>
        </Box>
        <Box sx={{ display: "flex", lineHeight: "1.1rem" }}>
          <Box
            sx={{ flex: 1, display: "flex", justifyContent: "center" }}
            className="with-divider"
          >
            <Box>
              <Typography
                component="h3"
                variant="h3"
                sx={{ lineHeight: "1rem", fontWeight: 900 }}
              >
                20
              </Typography>
              <Typography
                component="small"
                variant="small"
                sx={{ fontSize: "0.7rem" }}
              >
                Years in business
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ flex: 1, display: "flex", justifyContent: "center" }}
            className="with-divider"
          >
            <Box>
              <Typography
                component="h3"
                variant="h3"
                sx={{ lineHeight: "1rem", fontWeight: 900 }}
              >
                200+
              </Typography>
              <Typography
                component="small"
                variant="small"
                sx={{ fontSize: "0.7rem" }}
              >
                Projects Launched
              </Typography>
            </Box>
          </Box>
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <Box>
              <Typography
                component="h3"
                variant="h3"
                sx={{ lineHeight: "1rem", fontWeight: 900 }}
              >
                1500+
              </Typography>
              <Typography
                component="small"
                variant="small"
                sx={{ fontSize: "0.7rem" }}
              >
                No. of Employees
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <Button className="secondary-btn">Check our Media Presence</Button>
          <Button className="main-btn">Read more About Us</Button>
        </Box>
      </Box>
      <Box sx={{ flex: 1 }} className="detail-img">
        <Box component="img" src="./assets/section2.jpg" />
      </Box>
    </Box>
  );
};
export default DetailImage;
