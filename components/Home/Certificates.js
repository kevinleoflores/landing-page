import { Box, Typography } from "@mui/material";

const Certificates = () => {
  return (
    <Box component="section" className="certificate">
      <Box className="certificate-flex">
        <Box className="left" sx={{ paddingRight: "2rem" }}>
          <Typography
            component="h1"
            variant="h3"
            sx={{ textAlign: "left", marginTop: "40px" }}
          >
            Company Certificates
          </Typography>
          <Typography sx={{ marginTop: "40px" }}>
            Our technologies and employees are certified by highly recoginzed
            and leading organizations to ensure exceptional service and product
            delivery.
          </Typography>
        </Box>
        <Box className="right">
          <Box sx={{ display: "flex", margin: "1.2rem 0" }}>
            <Box className="tags">
              <Typography sx={{ fontSize: "0.9rem", margin: "0 8px" }}>
                Company Certification
              </Typography>
            </Box>
            <Box className="tags">
              <Typography sx={{ fontSize: "0.9rem", margin: "0 8px" }}>
                Employee Certification
              </Typography>
            </Box>
            <Box className="tags">
              <Typography sx={{ fontSize: "0.9rem", margin: "0 8px" }}>
                Company Affiliation
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ display: "flex", margin: "1.2rem 0" }}
            className="certificate-img"
          >
            <Box component="img" src="./assets/shopify.png" />
            <Box component="img" src="./assets/ga.png" />
            <Box component="img" src="./assets/capterra.png" />
            <Box component="img" src="./assets/refersion.jpg" />
          </Box>
          <Box
            sx={{ display: "flex", margin: "1.2rem 0" }}
            className="certificate-img"
          >
            <Box component="img" src="./assets/eu.png" />
            <Box component="img" src="./assets/fascinate.png" />
            <Box component="img" src="./assets/solitica.jpg" />
            <Box component="img" src="./assets/dbs_logo.svg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Certificates;
