import { Avatar, Box, Typography } from "@mui/material";
import { CAPA } from "../../utils/content";

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
            The Top Tier Equation
          </Typography>
          <Typography>{CAPA}</Typography>
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
              Our team is composed of experts and professionals, who are
              continuously expanding and growing. We always love learning new
              things to keep up with the changing times.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/2.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              Integrated Connectivity
            </Typography>
            <Typography>
              We always ensure that we're meeting our client's needs. We
              regularly send project updates to keep our clients updated and
              monitor developments.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/3.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              24/7 Support
            </Typography>
            <Typography>
              We have a team that is always prepared to help our clients with
              their concerns. They can reach out to us anytime.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/4.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              Supports Multiple Technologies
            </Typography>
            <Typography>
              Our services support comprehensive technologies to develop
              thorough and innovative business solutions.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/5.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              Tailor-made Solutions
            </Typography>
            <Typography>
              Our team develops solutions to meet our clients' specific
              requirements based on their unique needs.
            </Typography>
          </Box>
          <Box className="capabilities-item">
            <Box component="img" src="./assets/capa/6.jpg" variant="square" />
            <Typography component="h6" variant="h6">
              Empowered Talents and Connections
            </Typography>
            <Typography>
              We continuously nourish our team to develop their skills and
              empower them personally and professionally.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Capabilities;
