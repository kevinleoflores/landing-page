import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import Banner from "../../../components/common/Banner";
import ImageText from "../../../components/common/ImageText";
import WhyChoose from "../../../components/common/WhyChoose";
import Articles from "../../../components/Home/Articles";
import SectionEight from "../../../components/Home/SectionEight";
import SendUs from "../../../components/Home/SendUs";

import { pathsActions } from "../../../store/slice/pathsSlice";
import OurProcess from "../../../components/common/OurProcess";

const SolutionsItem = () => {
  const dispatch = useDispatch();
  const paths = useSelector((state) => state.paths);
  const { query, push } = useRouter();
  useEffect(() => {
    const solutionsSubMenu = paths.solutionsSubMenu;

    if (solutionsSubMenu !== undefined && solutionsSubMenu !== null) {
      const newMap = solutionsSubMenu.map((row) => {
        const filtered = row.title.replaceAll(" ", "-").toLowerCase();
        return filtered.replaceAll("/", "-").toLowerCase();
      });
      if (query.solutionId !== undefined) {
        dispatch(pathsActions.getSubData(query.solutionId));
        if (new Set(newMap).has(query.solutionId) === false) {
          push("/");
        }
      }
    }
  }, [paths, query]);

  return (
    <Box>
      <Banner
        title={paths.sub_data.title}
        banner="/assets/solutions.png"
        description={paths.sub_data.description}
        btnText="Talk to Us"
      />
      <ImageText
        title={paths.sub_data.title}
        description={paths.sub_data.description}
      />
      <WhyChoose
        title={paths.sub_data.title}
        description={paths.sub_data.why_us}
      />
      <SendUs />
      <SectionEight />
      <Articles />
    </Box>
  );
};
export default SolutionsItem;
