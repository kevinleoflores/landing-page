import React, { useState, useEffect } from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import MediaQuery from "react-responsive";

import { getArticles } from "../../store/slice/articleSlice";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Articles = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article);
  const [data, setData] = useState([]);
  const [caseLength, setCaseLength] = useState(0);
  const [desktop, setDesktop] = useState(false);
  const [mobile, setMobile] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const pagePath = (path) => {
    const filteredPath = path.replaceAll(" ", "-");
    return filteredPath;
  };

  useEffect(() => {
    dispatch(getArticles());
  }, []);

  useEffect(() => {
    if (articles?.data.length !== 0) {
      setData(articles.data);
    }
  }, [articles]);

  useEffect(() => {
    if (isDesktopOrLaptop) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }

    if (isTabletOrMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [isDesktopOrLaptop, isTabletOrMobile]);

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
      {desktop && (
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
            {data.length > 0 &&
              data.map((row, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Paper className="articles-card">
                      <Box
                        sx={{ borderRadius: "8px 8px 0 0", overflow: "hidden" }}
                      >
                        <Link href={"/articles/" + pagePath(row.path)}>
                          <Box component="img" src={row.image} />
                        </Link>
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
      )}

      {mobile && (
        <Box sx={{ marginTop: "40px" }}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            navigation
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
          >
            {data.length > 0 &&
              data.map((row, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Paper className="articles-card">
                      <Box
                        sx={{ borderRadius: "8px 8px 0 0", overflow: "hidden" }}
                      >
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
      )}
    </Box>
  );
};
export default Articles;
