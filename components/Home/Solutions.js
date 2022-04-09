import { Box, Typography } from "@mui/material";
import { SOLUTIONS_DETAILS } from "../../utils/content";
import CardOne from "./components/CardOne";


const Solutions = () => {
  return (
    <Box id="solutions" component="section" className="solutions">
      <Typography
        component="h1"
        variant="h3"
        sx={{ textAlign: "center", paddingTop: "40px" }}
      >
        Solutions Toolbox
      </Typography>
      <Typography sx={{ textAlign: "center", paddingTop: "32px" }}>
        Our wide array of business solutions are specifically designed to
        address and meet your business needs.
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", marginTop: "24px" }}>
        {SOLUTIONS_DETAILS.map((row, index) => {
          return (
            <CardOne
              key={index}
              icon={row.icon}
              title={row.title}
              description={row.description}
              process1={row.process1}
              process2={row.process2}
              process3={row.process3 ? row.process3 : ""}
              process4={row.process4 ? row.process4 : ""}
              process5={row.process5 ? row.process5 : ""}
            />
          );
        })}
      </Box>
    </Box>
  );
};
export default Solutions;
