import { Box, Typography } from "@mui/material";
const AboutHistory = () => {
  return (
    <Box className="about-history">
      <Box className="about-history__banner" sx={{ width: "100%" }}>
        <Box component="img" src="./assets/about-banner.png" />
      </Box>
      <Box className="about-history__content">
        <Box className="content-outer">
          <Box className="content-inner">
            <Typography component="h2" variant="h4">
              About Us
            </Typography>
            <Typography>
              The top solutions in the Philippines that is Top Tier, was founded
              year 2021 and only had a few employees under its name. Despite our
              small numbers, the company had big dreams and even bigger passion
              that ferried them across the start of the digital age both local
              and international.
            </Typography>
            <Typography>
              Time goes by and the companies roster of expers grow. The
              company's excellent track record became the reason why they had
              been recognized by the country's digital community.
            </Typography>
          </Box>
        </Box>
        <Box className="about-office">
          <Box className="about-office__image">
            <Box component="img" src="./assets/office.png" />
          </Box>
          <Box className="about-office__text">
            <Box className="text-inner">
              <Typography>
                Top Tier kept growing, both in numbers and expertise. This
                inspires the company more to move forward and explore
                innovations in the name of digitalization. It also became one of
                the catalysts for one of the country's top tech companies.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="content-outer">
          <Box className="content-inner">
            <Typography>
              These developments were vital for the company apart from
              capitalizing on the success reached in the past years and
              exponential growth of the brand, it also occured around the time
              that changes in the technological landscape, especially in terms
              of business processes, were starting to take root.
            </Typography>
            <Typography>
              As of today, we're one of the top IT players in the Philippines,
              promoting a digitally-savvy-society and delivering solutions no
              matter how difficult the challenges we will overcome. With our
              team all dedicated to helping the company's wide variety of
              clients across different fields, we're certainly stronger than
              ever.
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>
              We Just Keeping Making History.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutHistory;
