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
              Top Tier Digital Solutions was functioning before with a small
              team of friends working at a small apartment altogether who had
              big dreams and an even bigger passion that pushed them to strive
              harder in the digital world. In a few years, Top Tier grew and
              paved the way for the formation of a digital agency that solves
              many solutions for businesses adapting to the digital world. This
              mission is the reason why Top Tier is continuously growing and
              expanding, and building trust with our clients
            </Typography>
            <Typography>
              Top Tier Digital Solutions was before called ALM Services derived
              from the initials of its founder, Mr. Angelo Lacson Marikit. ALM
              Services offered services mainly on building an e-commerce store
              and managing it, but our founder decided to expand the scope of
              our services. He started building a company, building a larger
              office, and hiring and nurturing new skilled employees. The name
              Top Tier Digital Solutions was inspired by the leaders and the
              team’s desire to be at the top when it comes to digital services.
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
                innovations in the name of digitalization.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className="content-outer">
          <Box className="content-inner">
            <Typography>
              These developments were vital for the company. Aside from the
              success reached in the past and the growth of the brand, the
              changes in the technological landscape had a great impact on
              having a great work performance and delivering better services.
              Now, we're one of the best companies offering digital services in
              the Philippines, promoting a friendly but professional community
              and delivering solutions no matter how difficult the challenges we
              have to overcome.
            </Typography>
            <Typography sx={{ fontWeight: 600 }}>
              HOOORAAAAHHH!!
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AboutHistory;
