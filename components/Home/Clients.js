import { Box, Typography } from "@mui/material";

const Clients = () => {
  return (
    <Box component="section">
      <Box>
        <Typography
          component="h1"
          variant="h3"
          sx={{ textAlign: "center", marginTop: "40px" }}
        >
          Our Clients
        </Typography>
        <Typography sx={{ textAlign: "center", marginTop: "40px" }}>
          We put our expertise to work to help businesses scale and become
          future-ready.
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", margin: "40px 0" }}
        className="client-img"
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="img" src="./assets/client1.png" />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="img" src="./assets/client2.png" />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="img" src="./assets/client3.png" />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box component="img" src="./assets/client4.png" />
        </Box>
      </Box>
    </Box>
  );
};
export default Clients;
