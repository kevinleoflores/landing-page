import { Box, Typography } from "@mui/material";
import PageBanner from "../../components/common/PageBanner";
const Articles = () => {
  return (
    <Box className="articles-page">
      <PageBanner
        title="Articles"
        description="News, highlights, and intellectual pieces from our experts in the company!"
      />
    </Box>
  );
};
export default Articles;
