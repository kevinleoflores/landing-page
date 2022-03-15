import { Avatar, Box, Typography } from "@mui/material";

const Capabilities = () => {
  return (
    <Box
      component="section"
      className="capabilities"
      sx={{ display: "flex", padding: 0 }}
    >
      <Box
        sx={{
          background: `url('./assets/bg-1.jpg')`,
          height: "auto",
        }}
        className="capabilities-info"
      >
        <Box
          className="capabilities-text"
          sx={{ marginTop: "40px", padding: "16px 24px" }}
        >
          <Typography
            component="h1"
            variant="h3"
            sx={{ marginTop: "40px", marginBottom: "32px" }}
          >
            The Yondu Equation
          </Typography>
          <Typography>
            We're driving innovation and digital transformation to take your
            business to the next level. Our chemistry is made up of agility ,
            dynamism, competence, allowing us to respond to your ever-changing
            needs.
          </Typography>
        </Box>
      </Box>
      <Box className="capabilities-details">
        <Box style={{ display: "flex", flexWrap: "wrap", marginTop: "40px" }}>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/1.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              Agile Team Dynamics
            </Typography>
            <Typography>
              The team is composed of young and vibrant individuals, who are
              continuously evolving and growing. We're always moving and
              learning to keep up with the changing times.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/2.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              Integrated Connectivity
            </Typography>
            <Typography>
              We want to ensure we're meeting your needs. Our team regularly
              send updates to keep you in track and monitor developments.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/3.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              24/7 Support
            </Typography>
            <Typography>
              Our Support Team is always ready to help you with your concerns.
              Feel free to contact us anytime via chat or call.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/4.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              Supports Multiple Technologies
            </Typography>
            <Typography>
              Supporting wide array of industry-standard technologies to create
              innovative business solutions.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/5.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              Tailor-made Solutions
            </Typography>
            <Typography>
              Understanding the organizations unique needs. The team develops
              bespoke solutions to meet your requirements.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/6.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              Empowered Talents and Connections
            </Typography>
            <Typography>
              We believe the our greatest asset is our people. We continuously
              nourish their skills with various upskilling programs to empower
              their personality and profession.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Capabilities;
