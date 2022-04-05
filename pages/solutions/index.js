import { Box } from "@mui/material";
import Banner from "../../components/common/Banner";
import Certificates from "../../components/Home/Certificates";
import Solutions from "../../components/Home/Solutions";

const SolutionsPage = () => {
  return (
    <Box>
      <Banner
        title="Solutions"
        banner="./assets/solutions.png"
        description="Our wide array of technology solutions are specifically designed to address your pain points and meet your business needs."
        btnText="Talk to Us"
      />
      <Solutions />
    </Box>
  );
};
export default SolutionsPage;
