import { Box, Typography } from "@mui/material";

import {
  AssetsCard,
  AssetsCardContainer,
  AssetsHeading,
  AssetsLifeCycleContainer,
  AssetsText,
  AssetsTopContainer,
  CardBottomText,
  CardMiddleText,
  CardTopText,
} from "./CustomComponents";
import houseImg from "../../Images/landingPage/asset-lifeCycle/asset-lifecycle2.png";

function AssetsLifeCycle() {
  const cardContent = [
    {
      top: "01",
      middle: "Tokenization",
      bottom: "Securitize and auction bonds in an automated process",
    },
    {
      top: "02",
      middle: "Trade Execution",
      bottom:
        "Receive pre-trade transparency on liquidity information with constant price discovery on trades",
    },
    {
      top: "03",
      middle: "Settlement",
      bottom: "Get instant execution and T-0 settlement with delivery vs payment method",
    },
    {
      top: "04",
      middle: "Post Trade Process",
      bottom: "Access automatic and compliant post-trade processing at a fraction of the time and costs",
    },
  ];
  return (
    <AssetsLifeCycleContainer>
      <Box width={"80%"} margin={"0 auto"}>
        <AssetsTopContainer>
          <Box sx={{ width: { xl: '50%', md: '50%', sm: '100%' } }} className="AssetsTopIstContainer">
            <img
              // style={{ width: { xl: '78%', md: '78%', sm: '100%' }, height: { xl: '55%', md: '55%', sm: '100%' }, marginTop: "44px" }}
              style={{ width: '78%', height: '55%', marginTop: "44px" }}
              src={houseImg}
              alt="house-img"
            />
          </Box>

          <Box sx={{ width: { xl: '50%', md: '50%', sm: '100%' }, mt: '-55px' }}>
            <AssetsHeading>
              <Typography color="#659BEB" variant="span">
                Unlock
              </Typography>{" "}
              Private Credit with DeFi
            </AssetsHeading>
            <AssetsText>
              Blockhouse uses DeFi to tokenize credit derivatives in a compliant
              manner to leverage the composability and settlement advantages of
              public blockchain infrastructure
            </AssetsText>
          </Box>
        </AssetsTopContainer>
        <Box sx={{ mt: "39px" }} className="assetsHeadingLifecycle">
          <AssetsHeading style={{fontSize: '35px', letterSpacing: '-1px'}}>
            The Asset {""}
            <Typography color="#659BEB" variant="span" style={{ width: "100%" }}>
              Lifecycle
            </Typography>
          </AssetsHeading>

          <AssetsCardContainer>
            {cardContent.map(({ top, middle, bottom }) => (
              <AssetsCard key={middle}>
                <CardTopText>{top}</CardTopText>
                <CardMiddleText>{middle}</CardMiddleText>
                <CardBottomText style={{ marginLeft: "10px" }}>
                  {bottom}
                </CardBottomText>
              </AssetsCard>
            ))}
          </AssetsCardContainer>
        </Box>
      </Box>
    </AssetsLifeCycleContainer>
  );
}

export default AssetsLifeCycle;
