import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Articles = () => {
  const [data, setData] = useState([]);
  const [caseLength, setCaseLength] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("./mock_data/case.json");
      const resp = await response.json();
      setData(resp);
      setCaseLength(resp.length);
    };
    getData();
  });
  return (
    <Box id="articles" component="section" className="articles">
      <Box className="title">
        <Typography component="h1" variant="h3">
          Articles
        </Typography>
        <Typography>
          Gain helpful insights, business ideas, and tips from our blog.{" "}
          <Typography component="span">View all articles here. </Typography>
        </Typography>
      </Box>
      <Box sx={{ marginTop: "40px" }}>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          navigation
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {data.map((row, index) => {
            return (
              <SwiperSlide key={index}>
                <Paper key={index} className="articles-card">
                  <Box sx={{ borderRadius: "8px 8px 0 0", overflow: "hidden" }}>
                    <Box component="img" src={row.image} />
                  </Box>
                  <Box>
                    <Typography
                      component="h1"
                      variant="h6"
                      sx={{ marginTop: "8px" }}
                    >
                      {row.title}
                    </Typography>
                    <Typography sx={{ fontWeight: 600, marginTop: "24px" }}>
                      {row.date_created}
                    </Typography>
                  </Box>
                </Paper>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};
export default Articles;
