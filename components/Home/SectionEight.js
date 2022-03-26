import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import CaseCard from "./components/CaseCard";

const SectionEight = () => {
  const [data, setData] = useState([]);
  const [caseLength, setCaseLength] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("./mock_data/case.json");
        const resp = await response.json();
        setData(resp);
        setCaseLength(resp.length);
      } catch (err) {
        console.log(err);
      }
    };
    getData();

    return () => {
      setData([]);
      setCaseLength(0);
    };
  }, []);
  return (
    <Box component="section" className="section8">
      <Box className="section8__inner" sx={{ display: "flex" }}>
        <Box className="section8-left">
          <Typography component="h1" variant="h3">
            Industries
          </Typography>
          <Typography sx={{ marginTop: "32px" }}>
            We cater organizations accross different digital Industries. We
            offer specific solutions to keep your business growing.
          </Typography>
          <Box sx={{ marginTop: "32px" }}>
            <Typography
              component="h6"
              variant="h6"
              sx={{ marginBottom: "16px" }}
            >
              Banking, Financial Services and Insurance
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{ marginBottom: "16px" }}
            >
              Logistics
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{ marginBottom: "16px" }}
            >
              Manufacturing
            </Typography>
            <Typography
              component="h6"
              variant="h6"
              sx={{ marginBottom: "16px" }}
            >
              Retail
            </Typography>
          </Box>
        </Box>
        <Box className="section8-right">
          <Typography component="h1" variant="h3">
            Case Studies
          </Typography>
          <Box sx={{ marginTop: "32px" }}>
            {data.slice(0, 2).map((row, index) => {
              return (
                <CaseCard
                  key={index}
                  title={row.title}
                  description={row.description}
                  date={row.date_created}
                  img={row.image}
                />
              );
            })}
            {caseLength > 2 && (
              <Box>
                <Button className="main-btn">View All Cases</Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default SectionEight;
