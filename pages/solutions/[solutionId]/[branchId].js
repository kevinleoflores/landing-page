import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import Banner from "../../../components/common/Banner";
import ImageText from "../../../components/common/ImageText";
import WhyChoose from "../../../components/common/WhyChoose";
import Articles from "../../../components/Home/Articles";
import SectionEight from "../../../components/Home/SectionEight";
import SendUs from "../../../components/Home/SendUs";

import { pathsActions } from "../../../store/slice/pathsSlice";
import OurProcess from "../../../components/common/OurProcess";

const BranchItem = () => {
  const dispatch = useDispatch();
  const paths = useSelector((state) => state.paths);
  const { query, push } = useRouter();
  useEffect(() => {
    const solutionsSubMenu = paths.branchMenu;
    if (solutionsSubMenu !== undefined && solutionsSubMenu !== null) {
      const newMap = solutionsSubMenu.map((row) => {
        return row.title.replaceAll(" ", "-").toLowerCase();
      });
      if (query.branchId !== undefined) {
        dispatch(pathsActions.getBranchData(query.branchId));
        if (new Set(newMap).has(query.branchId) === false) {
          push("/");
        }
      }
    }
  }, [paths, query]);
  return (
    <Box>
      <Banner
        title={paths.branch_data.title}
        banner="/assets/solutions.png"
        description={paths.branch_data.description}
        btnText="Talk to Us"
      />
      <ImageText
        title={paths.branch_data.title}
        description={paths.branch_data.longDesc}
      />
      <WhyChoose
        title={paths.branch_data.title}
        description={paths.branch_data.why_us}
        features={paths.branch_data.features}
      />
      {paths.branch_data.our_process !== undefined && (
        <OurProcess data={paths.branch_data.our_process} />
      )}

      <SendUs />
      <SectionEight />
      <Articles />
    </Box>
  );
};
export default BranchItem;
