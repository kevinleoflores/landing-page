import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

const Team = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTeam = async () => {
      try {
        const response = await fetch("./mock_data/team.json");
        const data = await response.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getTeam();
    return () => {
      setData([]);
    };
  }, []);
  return (
    <Box className="about-team bg-1">
      <Box className="about-team__inner">
        <Box className="about-team__title">
          <Typography className="text" component="h1" variant="h3">
            Top Tier Notchers
          </Typography>
          <Typography className="text">
            The strong and bold, passion driven individuals that leads Top Tier
            to new heights.
          </Typography>
        </Box>
        <Box className="about-team__content">
          {data.map((row, index) => {
            return (
              <Box className="about-team__card" key={index}>
                <Box className="card-avatar">
                  <Box component="img" src={row.image} />
                </Box>
                <Box className="card-info">
                  <Typography className="info-name text">{row.name}</Typography>
                  <Typography className="info-position text">
                    {row.position}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
export default Team;
