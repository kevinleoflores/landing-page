import { Box, Button, TextField, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

const COMPANY_INFO = [
  {
    icon: <Icon icon="akar-icons:location" />,
    name: "Floor, Unit No., Building Name, Street, City, Province, Zip Code",
  },
  {
    icon: <Icon icon="fluent:call-32-filled" />,
    name: "+63 999998 30 99",
  },
  {
    icon: <Icon icon="fluent:mail-20-filled" />,
    name: "info@.toptier.com",
  },
];

const FooterTwo = () => {
  const iconWidth = 30;
  return (
    <Box component="footer" className="footer-two">
      <Box className="footer-two__inner" sx={{ display: "flex" }}>
        <Box className="left" sx={{ padding: "32px 0" }}>
          {/* <Box component="img" src /> */}
          <Box>
            <Typography component="h2" variant="h2">
              LOGO
            </Typography>
          </Box>
          <Box sx={{ marginTop: "16px" }}>
            {COMPANY_INFO.map((row, index) => {
              return (
                <Box
                  className="company-info"
                  sx={{ display: "flex", marginBottom: "16px" }}
                  key={index}
                >
                  <Box>{row.icon}</Box>
                  <Box sx={{ marginLeft: "8px" }}>
                    <Typography>{row.name}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box className="socmed-icons">
            <Icon icon="logos:facebook" width={iconWidth} />
            <Icon icon="logos:linkedin-icon" width={iconWidth} />
            <Icon
              icon="brandico:instagram-filled"
              style={{ color: "#9b27b0" }}
              width={iconWidth}
            />
            <Icon icon="logos:youtube-icon" width={iconWidth} />
          </Box>
        </Box>
        <Box className="right" sx={{ width: "50%", padding: "32px 0" }}>
          <Box>
            <Typography component="h5" variant="h5">
              Newsletter
            </Typography>
            <Typography sx={{ fontSize: "0.8rem" }}>
              Get what's hot and what's happening with us straight in your inbox
              today!
            </Typography>
          </Box>
          <Box sx={{ marginTop: "40px" }}>
            <form>
              <TextField
                label="Name"
                variant="outlined"
                sx={{ width: "100%", marginBottom: "16px", fontSize: "0.9rem" }}
                size="small"
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                sx={{ width: "100%", marginBottom: "16px", fontSize: "0.9rem" }}
                size="small"
              />
              <Button className="main-btn">Subscribe</Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default FooterTwo;
