import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Banner from "../../../components/common/Banner";
import ImageText from "../../../components/common/ImageText";
import WhyChoose from "../../../components/common/WhyChoose";
import Articles from "../../../components/Home/Articles";
import SectionEight from "../../../components/Home/SectionEight";
import SendUs from "../../../components/Home/SendUs";

const SolutionsItem = () => {
  const paths = useSelector((state) => state.paths);
  const { query, push } = useRouter();
  useEffect(() => {
    const solutionsSubMenu = paths.solutionsSubMenu;

    if (solutionsSubMenu !== undefined && solutionsSubMenu !== null) {
      const newMap = solutionsSubMenu.map((row) => {
        return row.title.replaceAll(" ", "-").toLowerCase();
      });
      if (query.solutionId !== undefined) {
        console.log(query.solutionId);
        if (new Set(newMap).has(query.solutionId) === false) {
          push("/");
        }
      }
    }
  }, [paths, query]);
  return (
    <Box>
      <Banner
        title="Solutions"
        banner="/assets/solutions.png"
        description="Our wide array of technology solutions are specifically designed to address your pain points and meet your business needs."
        btnText="Talk to Us"
      />
      <ImageText />
      <WhyChoose />
      <SendUs />
      <SectionEight />
      <Articles />
    </Box>
  );
};
export default SolutionsItem;
