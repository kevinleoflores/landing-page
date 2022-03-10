import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import Banner from "../components/Home/Banner";
import DetailImage from "../components/Home/Detail-Image";
import Clients from "../components/Home/Clients";

export default function Home() {
  return (
    <Box>
      <Banner />
      <DetailImage />
      <Clients />
    </Box>
  );
}
