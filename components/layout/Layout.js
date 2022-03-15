import { Box, Divider, Typography } from "@mui/material";
import Header from "./AppBar";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <FooterOne />
      <FooterTwo />
      <Box className="foot-note">
        <Divider />
        <Box sx={{ margin: "12px 0" }}>
          <Typography sx={{ fontSize: "0.7rem", color: "#626262" }}>
            © Copyright 2022 Yondu, Inc.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default Layout;
