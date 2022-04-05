import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Box } from "@mui/material";
import Banner from "../components/common/Banner";
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
      {/* <Banner /> */}
      <Banner
        title="Technology Made Human"
        banner="./assets/banner.jpg"
        description="Providing holistic technology solutions to help enterprises
        accelerate in the new digital economy."
        btnText="Explore our Solutions"
      />
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
