import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import Banner from "../components/Home/Banner";
import DetailImage from "../components/Home/Detail-Image";
import Clients from "../components/Home/Clients";
import Certificates from "../components/Home/Certificates";
import Capabilities from "../components/Home/Capabilities";
import Solutions from "../components/Home/Solutions";
import SendUs from "../components/Home/SendUs";
import SectionEight from "../components/Home/SectionEight";
import Articles from "../components/Home/Articles";

export default function Home() {
  return (
    <Box>
      <Banner />
      <DetailImage />
      <Clients />
      <Box className="bg-2">
        <Certificates />
        <Capabilities />
        <Solutions />
      </Box>
      <SendUs />
      <SectionEight />
      <Articles />
    </Box>
  );
}
